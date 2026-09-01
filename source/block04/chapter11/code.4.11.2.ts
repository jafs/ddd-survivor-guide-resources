// El canal por donde la Saga envía Comandos. Cada uno lo
// recogerá su Manejador correspondiente.
interface BusComandos {
  enviar(comando: Comando): Promise<void>;
}

// Capa de APLICACIÓN. Orquesta el proceso; las reglas de
// negocio siguen dentro de cada Agregado.
class SagaEvacuacion {
  private pendientes: string[] = [];
  private trasladados: string[] = [];
  private fase:
    | "iniciando"
    | "transfiriendo"
    | "completada"
    | "compensando" = "iniciando";

  constructor(
    private readonly refugioOrigenId: string,
    private readonly refugioDestinoId: string,
    private readonly busComandos: BusComandos
  ) {}

  // Paso 0: el centro comercial marca la evacuación.
  async onEvacuacionIniciada(
    evento: EvacuacionIniciada
  ): Promise<void> {
    this.pendientes = [...evento.supervivientesIds];
    this.fase = "transfiriendo";
    await this.reservarSiguientePlaza();
  }

  // Paso 1 → 2: hay plaza, sacamos a la persona del centro.
  async onPlazaReservada(
    evento: PlazaReservada
  ): Promise<void> {
    await this.busComandos.enviar({
      tipo: "RetirarSuperviviente",
      refugioId: this.refugioOrigenId,
      supervivienteId: evento.supervivienteId
    });
  }

  // Paso 2 → 3: ya está fuera, la admitimos en el destino.
  async onSupervivienteRetirado(
    evento: SupervivienteRetirado
  ): Promise<void> {
    await this.busComandos.enviar({
      tipo: "AdmitirSuperviviente",
      refugioId: this.refugioDestinoId,
      supervivienteId: evento.supervivienteId
    });
  }

  // Paso 3: ciclo cerrado. Siguiente persona o fin.
  async onSupervivienteAdmitido(
    evento: SupervivienteAdmitido
  ): Promise<void> {
    this.trasladados.push(evento.supervivienteId);
    this.pendientes = this.pendientes.filter(
      (id) => id !== evento.supervivienteId
    );
    if (this.pendientes.length === 0) {
      this.fase = "completada";
      return;
    }
    await this.reservarSiguientePlaza();
  }

  // Compensación: acciones nuevas, no un rollback.
  async onPlazaNoDisponible(): Promise<void> {
    this.fase = "compensando";
    await this.busComandos.enviar({
      tipo: "CancelarEvacuacion",
      refugioId: this.refugioOrigenId,
      supervivientesEnEspera: this.pendientes
    });
  }

  private async reservarSiguientePlaza(): Promise<void> {
    await this.busComandos.enviar({
      tipo: "ReservarPlaza",
      refugioId: this.refugioDestinoId,
      supervivienteId: this.pendientes[0]
    });
  }
}
