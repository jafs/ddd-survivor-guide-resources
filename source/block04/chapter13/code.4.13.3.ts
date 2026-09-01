// Sustituto del Repositorio: un Map en lugar de una tabla.
class RepositorioRefugioEnMemoria implements RepositorioRefugio {
  private refugios = new Map<string, Refugio>();

  async buscarPorId(id: string): Promise<Refugio | null> {
    return this.refugios.get(id) ?? null;
  }

  async guardar(refugio: Refugio): Promise<void> {
    this.refugios.set(refugio.id, refugio);
  }
}

// Sustituto del Bus: no reparte nada, sólo apunta.
class BusEventosEspia implements BusEventos {
  public publicados: EventoDominio[] = [];

  async publish(evento: EventoDominio): Promise<void> {
    this.publicados.push(evento);
  }

  on(): void {
    // Nadie escucha en este test.
  }
}

describe("ManejadorAdmitirSuperviviente", () => {
  test("admite, guarda y publica SupervivienteAdmitido",
    async () => {
      const repositorio = new RepositorioRefugioEnMemoria();
      const bus = new BusEventosEspia();
      const carcel = Refugio.fundar("Carcel 1", COORDS_TEST, 20);
      await repositorio.guardar(carcel);
      const manejador = new ManejadorAdmitirSuperviviente(
        repositorio,
        bus
      );

      await manejador.handle({
        refugioId: carcel.id,
        supervivienteId: "1",
        nombre: "Elena",
        salud: 100
      });

      const refugio = await repositorio.buscarPorId(carcel.id);
      expect(refugio?.obtenerSupervivientes()).toHaveLength(1);
      expect(bus.publicados).toHaveLength(1);
      expect(bus.publicados[0].tipo).toBe("SupervivienteAdmitido");
    }
  );

  test("falla si el refugio no existe",
    async () => {
      const manejador = new ManejadorAdmitirSuperviviente(
        new RepositorioRefugioEnMemoria(),
        new BusEventosEspia()
      );

      await expect(
        manejador.handle({
          refugioId: "no-existe",
          supervivienteId: "1",
          nombre: "Elena",
          salud: 100
        })
      ).rejects.toThrow("Refugio no encontrado");
    }
  );
});
