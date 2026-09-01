// El Comando representa la intención y sólo contiene datos.
interface ComandoAdmitirSuperviviente {
  readonly refugioId: string;
  readonly supervivienteId: string;
  readonly nombre: string;
  readonly salud: number;
}

// El Manejador es quien ejecuta la intención.
class ManejadorAdmitirSuperviviente {
  constructor(
    private repositorioRefugio: RepositorioRefugio
  ) {}

  async handle(cmd: ComandoAdmitirSuperviviente): Promise<void> {
    // 1. Cargar el agregado desde el repositorio.
    const refugio = await this.repositorioRefugio.buscarPorId(cmd.refugioId);
    if (!refugio) {
      throw new Error("Refugio no encontrado.");
    }

    // 2. Construir el objeto de dominio.
    const superviviente = Superviviente.registrar(
      cmd.supervivienteId,
      cmd.nombre,
      cmd.salud
    );

    // 3. Invocar método del dominio.
    // AQUÍ se validan las reglas de negocio.
    refugio.admitir(superviviente);

    // 4. Persistir los cambios.
    await this.repositorioRefugio.guardar(refugio);
  }
}
