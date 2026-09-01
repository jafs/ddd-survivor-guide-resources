interface ComandoTrasladarSuperviviente {
  readonly refugioOrigenId: string;
  readonly refugioDestinoId: string;
  readonly supervivienteId: string;
}

class ManejadorTrasladarSuperviviente {
  constructor(
    private repositorioRefugio: RepositorioRefugio,
    private servicioTraslado: ServicioTraslado
  ) {}

  async handle(
    cmd: ComandoTrasladarSuperviviente
  ): Promise<void> {
    // 1. Carga de entidades y agregados
    const refugioOrigen =
      await this.repositorioRefugio.buscarPorId(
        cmd.refugioOrigenId
      );
    if (!refugioOrigen) {
      throw new Error("Refugio de origen no encontrado.");
    }

    const refugioDestino =
      await this.repositorioRefugio.buscarPorId(
        cmd.refugioDestinoId
      );
    if (!refugioDestino) {
      throw new Error("Refugio de destino no encontrado.");
    }

    const superviviente =
      refugioOrigen.buscarSuperviviente(
        cmd.supervivienteId
      );
    if (!superviviente) {
      throw new Error("Superviviente no encontrado.");
    }

    // 2. Invocación al servicio de dominio
    this.servicioTraslado.trasladar(
      superviviente, refugioOrigen, refugioDestino
    );

    // 3. Persistencia de los agregados
    await this.repositorioRefugio.guardar(refugioOrigen);
    await this.repositorioRefugio.guardar(refugioDestino);
  }
}
