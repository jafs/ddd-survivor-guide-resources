class Refugio {
  private supervivientes: Superviviente[];
  private suministros: SuministroRefugio[] = [];

  private constructor(
    private readonly _id: string,
    private readonly _nombre: string,
    private readonly _coordenadas: Coordenadas,
    private readonly _capacidad: number,
    supervivientesIniciales: Superviviente[] = []
  ) {
    if (!_id.trim()) {
      throw new Error(
        "El identificador del refugio no puede estar vacío"
      );
    }
    if (!_nombre.trim()) {
      throw new Error(
        "El refugio necesita un nombre para ser registrado"
      );
    }
    if (_capacidad <= 0) {
      throw new Error("La capacidad debe ser mayor que cero");
    }
    this.supervivientes = supervivientesIniciales;
  }

  public get id(): string { return this._id; }
  public get nombre(): string { return this._nombre; }
  public get coordenadas(): Coordenadas { return this._coordenadas; }
  public get capacidad(): number { return this._capacidad; }

  public static fundar(
    nombre: string,
    coordenadas: Coordenadas,
    capacidad: number
  ): Refugio {
    return new Refugio(
      Refugio.generarId(nombre, coordenadas),
      nombre,
      coordenadas,
      capacidad
    );
  }

  // Genera un ID legible a partir del nombre y las coordenadas. Solo el
  // nombre necesita limpieza: las coordenadas son números y no pueden
  // contener espacios ni caracteres no permitidos. Ejemplo:
  // "centro-comercial_40.4708_-3.7038".
  private static generarId(
    nombre: string,
    coordenadas: Coordenadas
  ): string {
    const nombreLimpio = nombre
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return `${nombreLimpio}_${coordenadas.latitud}_${coordenadas.longitud}`;
  }

  public admitir(superviviente: Superviviente): void {
    // Si entra alguien más de la cuenta, el agua y los suministros no llegan
    // para todo el mundo. Esta comprobación nunca se salta.
    if (this.supervivientes.length + 1 > this._capacidad) {
      throw new Error("Refugio lleno: no podemos admitir más supervivientes");
    }

    this.supervivientes.push(superviviente);
  }

  public recibirSuministro(suministro: SuministroRefugio): void {
    // Buscamos por tipo (nombre), no por igualdad completa. En este
    // contexto, dos suministros del mismo nombre pero distinta cantidad
    // NO son iguales según equals(), pero sí se consolidan.
    const existente = this.suministros.find(
      s => s.nombre === suministro.nombre
    );

    if (existente) {
      const consolidado = SuministroRefugio.registrar(
        existente.nombre,
        existente.cantidad + suministro.cantidad
      );

      this.suministros = this.suministros.map(
        s => s.equals(existente) ? consolidado : s
      );
    } else {
      this.suministros.push(suministro);
    }
  }

  // Devolvemos COPIAS para que nadie modifique el estado sin "pasar por
  // la puerta".
  public obtenerSupervivientes(): Superviviente[] {
    return [...this.supervivientes];
  }

  public obtenerSuministros(): SuministroRefugio[] {
    return [...this.suministros];
  }
}
