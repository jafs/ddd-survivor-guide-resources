class Refugio {
  // Los eventos que han ocurrido durante esta operación.
  private readonly eventosDominio: EventoDominio[] = [];

  public admitir(s: Superviviente): void {
    if (this.supervivientes.length + 1 > this._capacidad) {
      throw new Error(
        "Refugio lleno: no podemos admitir más supervivientes"
      );
    }
    this.supervivientes.push(s);

    // El evento nace donde ocurre el hecho.
    this.eventosDominio.push({
      tipo: "SupervivienteAdmitido",
      idEvento: crypto.randomUUID(),
      refugioId: this.id,
      supervivienteId: s.id,
      momento: new Date().toISOString()
    });
  }

  // El Manejador llama a esto tras guardar el agregado.
  public pullDomainEvents(): EventoDominio[] {
    const eventos = [...this.eventosDominio];
    // Los vacía para no publicarlos dos veces.
    this.eventosDominio.length = 0;
    return eventos;
  }
}

// El Manejador ya no construye el evento: lo recoge del agregado.
class ManejadorAdmitirSuperviviente {
  constructor(
    private repositorioRefugio: RepositorioRefugio,
    private busEventos: BusEventos
  ) {}

  async handle(
    cmd: ComandoAdmitirSuperviviente
  ): Promise<void> {
    const refugio =
      await this.repositorioRefugio.buscarPorId(
        cmd.refugioId
      );
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

    // Los eventos ya están listos: el agregado los preparó.
    for (const evento of refugio.pullDomainEvents()) {
      await this.busEventos.publish(evento);
    }
  }
}
