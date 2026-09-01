class BusComandosEspia implements BusComandos {
  public enviados: Comando[] = [];

  async enviar(comando: Comando): Promise<void> {
    this.enviados.push(comando);
  }
}

describe("SagaEvacuacion", () => {
  test("al iniciar, reserva plaza para el primer pendiente",
    async () => {
      const bus = new BusComandosEspia();
      const saga = new SagaEvacuacion("centro", "carcel", bus);

      await saga.onEvacuacionIniciada({
        tipo: "EvacuacionIniciada",
        supervivientesIds: ["1", "2"]
      });

      expect(bus.enviados).toHaveLength(1);
      expect(bus.enviados[0]).toMatchObject({
        tipo: "ReservarPlaza",
        refugioId: "carcel",
        supervivienteId: "1"
      });
    }
  );

  test("si no hay plaza, compensa con los que quedaban",
    async () => {
      const bus = new BusComandosEspia();
      const saga = new SagaEvacuacion("centro", "carcel", bus);
      await saga.onEvacuacionIniciada({
        tipo: "EvacuacionIniciada",
        supervivientesIds: ["1", "2"]
      });

      await saga.onPlazaNoDisponible();

      const ultimo = bus.enviados[bus.enviados.length - 1];
      expect(ultimo).toMatchObject({
        tipo: "CancelarEvacuacion",
        refugioId: "centro",
        supervivientesEnEspera: ["1", "2"]
      });
    }
  );
});
