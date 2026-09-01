// Capa de dominio: qué necesitamos, no cómo se guarda.
interface RepositorioRefugio {
  // Localizar un refugio por su identificador.
  buscarPorId(id: string): Promise<Refugio | null>;

  // Registrar o actualizar los datos del refugio.
  guardar(refugio: Refugio): Promise<void>;

  // Encontrar refugios en un radio de exploración.
  buscarCercanos(coords: Coordenadas, radioKm: number): Promise<Refugio[]>;

  // Listar refugios con espacio para más supervivientes.
  buscarConCapacidad(): Promise<Refugio[]>;
}
