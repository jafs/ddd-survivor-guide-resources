// Solo datos, sin lógica de negocio.
interface InstantaneaSuperviviente {
  id: string;
  nombre: string;
  salud: number;
  habilidades: string[];
}

class Superviviente {
  // ...

  public aInstantanea(): InstantaneaSuperviviente {
    return {
      id: this._id,
      nombre: this._nombre,
      salud: this._salud,
      habilidades: [...this._habilidades]
    };
  }

  public static deInstantanea(snap: InstantaneaSuperviviente): Superviviente {
    // El constructor es privado, pero la clase sí puede llamarlo.
    return new Superviviente(
      snap.id,
      snap.nombre,
      snap.salud,
      [...snap.habilidades]
    );
  }
}
