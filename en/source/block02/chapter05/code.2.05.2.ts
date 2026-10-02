class Shelter {
  private survivors: Survivor[];
  private supplies: ShelterSupply[] = [];

  private constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _coordinates: Coordinates,
    private readonly _capacity: number,
    initialSurvivors: Survivor[] = []
  ) {
    if (!_id.trim()) {
      throw new Error(
        "The shelter identifier can't be empty"
      );
    }
    if (!_name.trim()) {
      throw new Error(
        "The shelter needs a name to be registered"
      );
    }
    if (_capacity <= 0) {
      throw new Error("The capacity must be greater than zero");
    }
    this.survivors = initialSurvivors;
  }

  public get id(): string { return this._id; }
  public get name(): string { return this._name; }
  public get coordinates(): Coordinates { return this._coordinates; }
  public get capacity(): number { return this._capacity; }

  public static found(
    name: string,
    coordinates: Coordinates,
    capacity: number
  ): Shelter {
    return new Shelter(
      Shelter.generateId(name, coordinates),
      name,
      coordinates,
      capacity
    );
  }

  // Generate a readable ID from the name and the coordinates. Only the
  // name needs cleaning: the coordinates are numbers and can't contain
  // spaces or disallowed characters. Example:
  // "shopping-mall_40.4708_-3.7038".
  private static generateId(
    name: string,
    coordinates: Coordinates
  ): string {
    const cleanName = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return `${cleanName}_${coordinates.latitude}_${coordinates.longitude}`;
  }

  public admit(survivor: Survivor): void {
    // If one person too many comes in, the water and the supplies won't
    // stretch to everyone. This check is never skipped.
    if (this.survivors.length + 1 > this._capacity) {
      throw new Error("Shelter full: we can't admit more survivors");
    }

    this.survivors.push(survivor);
  }

  public receiveSupply(supply: ShelterSupply): void {
    // Look up by kind (name), not by full equality. In this context,
    // two supplies with the same name but a different quantity are NOT
    // equal according to equals(), but they do get consolidated.
    const existing = this.supplies.find(
      s => s.name === supply.name
    );

    if (existing) {
      const consolidated = ShelterSupply.register(
        existing.name,
        existing.quantity + supply.quantity
      );

      this.supplies = this.supplies.map(
        s => s.equals(existing) ? consolidated : s
      );
    } else {
      this.supplies.push(supply);
    }
  }

  // Return COPIES so nobody can modify the state without "going through
  // the door".
  public getSurvivors(): Survivor[] {
    return [...this.survivors];
  }

  public getSupplies(): ShelterSupply[] {
    return [...this.supplies];
  }
}
