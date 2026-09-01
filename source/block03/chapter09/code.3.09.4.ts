// El canal por donde se publican los eventos.
interface BusEventos {
  publish(evento: EventoDominio): Promise<void>;
}

class ManejadorAdmitirSuperviviente {
  constructor(
    private repositorioRefugio: RepositorioRefugio,
    private busEventos: BusEventos
  ) {}

  async handle(
    cmd: ComandoAdmitirSuperviviente
  ): Promise<void> {
    const refugio =
      await this.repositorioRefugio.buscarPorId(cmd.refugioId);

    if (!refugio) {
      throw new Error("Refugio no encontrado.");
    }

    const superviviente = Superviviente.registrar(
      cmd.supervivienteId,
      cmd.nombre,
      cmd.salud
    );
    refugio.admitir(superviviente);
    await this.repositorioRefugio.guardar(refugio);

    // Si todo fue bien, notifica el evento.
    await this.busEventos.publish({
      tipo: "SupervivienteAdmitido",
      idEvento: crypto.randomUUID(),
      refugioId: refugio.id,
      supervivienteId: cmd.supervivienteId,
      momento: new Date().toISOString()
    });
  }
}
