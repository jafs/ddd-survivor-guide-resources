// Capa de APLICACIÓN.
class TrasladarSuperviviente {
  constructor(
    private readonly repositorio: RepositorioRefugio,
    private readonly unidadDeTrabajo: UnidadDeTrabajo
  ) {}

  async ejecutar(
    refugioOrigenId: string,
    refugioDestinoId: string,
    supervivienteId: string
  ): Promise<void> {
    await this.unidadDeTrabajo.ejecutar(async () => {
      const origen = await this.repositorio.buscarPorId(refugioOrigenId);
      const destino = await this.repositorio.buscarPorId(refugioDestinoId);

      // Las reglas del dominio se siguen aplicando.
      const superviviente = origen.obtenerSupervivientes()
        .find(s => s.id === supervivienteId)!;
      origen.retirarSuperviviente(supervivienteId);
      destino.admitir(superviviente);

      // Si algo falla, la unidad de trabajo revierte ambos.
      await this.repositorio.guardar(origen);
      await this.repositorio.guardar(destino);
    });
  }
}
