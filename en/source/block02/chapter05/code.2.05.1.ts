class ShelterSupply {
  private constructor(
    private readonly _name: string,
    private readonly _quantity: number
  ) {
    if (!_name.trim()) {
      throw new Error("The supply name can't be empty.");
    }
    if (_quantity <= 0) {
      throw new Error("The quantity must be greater than zero.");
    }
  }

  public static register(
    name: string,
    quantity: number
  ): ShelterSupply {
    return new ShelterSupply(name, quantity);
  }

  public get name(): string { return this._name; }
  public get quantity(): number { return this._quantity; }

  public equals(other: ShelterSupply): boolean {
    return (
      this._name === other._name &&
      this._quantity === other._quantity
    );
  }
}
