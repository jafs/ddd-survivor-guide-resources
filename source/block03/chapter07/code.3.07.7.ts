// Solo datos, sin lógica de negocio.
interface InstantaneaRefugio {
  id: string;
  nombre: string;
  coordenadas: { latitud: number; longitud: number };
  capacidad: number;
  supervivientes: InstantaneaSuperviviente[];
}

// Clase Refugio definida en el capítulo 5.
// Se añaden dos métodos para el patrón Snapshot.
class Refugio {
  // ...

  // Para que el repositorio persista el estado.
  public aInstantanea(): InstantaneaRefugio {
    return {
      id: this.id,
      nombre: this.nombre,
      coordenadas: {
        latitud: this.coordenadas.latitud,
        longitud: this.coordenadas.longitud
      },
      capacidad: this.capacidad,
      supervivientes: this.supervivientes.map(s => s.aInstantanea())
    };
  }

  // Reconstitución: el refugio ya existía, solo lo traemos de vuelta.
  public static deInstantanea(
    snap: InstantaneaRefugio
  ): Refugio {
    return new Refugio(
      snap.id,
      snap.nombre,
      Coordenadas.crear(
        snap.coordenadas.latitud,
        snap.coordenadas.longitud
      ),
      snap.capacidad,
      snap.supervivientes.map(Superviviente.deInstantanea)
    );
  }
}
