class SuministroRefugio {
  private constructor(
    private readonly _nombre: string,
    private readonly _cantidad: number
  ) {
    if (!_nombre.trim()) {
      throw new Error("El nombre del suministro no puede estar vacío.");
    }
    if (_cantidad <= 0) {
      throw new Error("La cantidad debe ser mayor que cero.");
    }
  }

  public static registrar(
    nombre: string,
    cantidad: number
  ): SuministroRefugio {
    return new SuministroRefugio(nombre, cantidad);
  }

  public get nombre(): string { return this._nombre; }
  public get cantidad(): number { return this._cantidad; }

  public equals(otro: SuministroRefugio): boolean {
    return (
      this._nombre === otro._nombre &&
      this._cantidad === otro._cantidad
    );
  }
}
