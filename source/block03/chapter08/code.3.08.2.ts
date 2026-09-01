class ConsultaEstadoRefugio {
  constructor(
    private readonly buscador: BuscadorEstadoRefugio
  ) {}

  async handle(refugioId: string): Promise<EstadoRefugio> {
    return this.buscador.obtenerEstado(refugioId);
  }
}
