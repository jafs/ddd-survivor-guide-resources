// Dominio: dos repositorios para el mismo contexto
interface RepositorioSuperviviente {
  guardar(superviviente: Superviviente): Promise<void>;
  buscarPorId(
    id: string
  ): Promise<Superviviente | null>;
}

interface RepositorioBusquedaSuperviviente {
  buscarPorSintomas(
    sintomas: string[]
  ): Promise<Superviviente[]>;
}

// Infraestructura: dos adaptadores distintos
class RepositorioSupervivientePostgreSQL
  implements RepositorioSuperviviente { /* ... */ }

class RepositorioBusquedaSupervivienteElastic
  implements RepositorioBusquedaSuperviviente { /* ... */ }
