class Coordinates {
  private constructor(
    private readonly _latitude: number,
    private readonly _longitude: number
  ) {
    if (_latitude < -90 || _latitude > 90) {
      throw new Error(
        `Invalid latitude: ${_latitude}. Must be between -90 and 90.`
      );
    }
    if (_longitude < -180 || _longitude > 180) {
      throw new Error(
        `Invalid longitude: ${_longitude}. Must be between -180 and 180.`
      );
    }
  }

  static create(latitude: number, longitude: number): Coordinates {
    return new Coordinates(latitude, longitude);
  }

  get latitude(): number { return this._latitude; }
  get longitude(): number { return this._longitude; }

  // Two points with identical values are the same point.
  equals(other: Coordinates): boolean {
    return this._latitude === other._latitude &&
      this._longitude === other._longitude;
  }

  // Business logic: find out whether two points are close.
  isNear(other: Coordinates, radiusKm: number): boolean {
    const KM_PER_DEGREE = 111; // Approximation: 1 degree is about 111 km.
    const latDiff = Math.abs(this._latitude - other._latitude);
    const lonDiff = Math.abs(this._longitude - other._longitude);
    const approxDistance = Math.sqrt(
      (latDiff * KM_PER_DEGREE) ** 2 + (lonDiff * KM_PER_DEGREE) ** 2
    );
    return approxDistance <= radiusKm;
  }
}

// Coordinates are never changed, they're created.
const point1 = Coordinates.create(40.4168, -3.7038);
const point2 = Coordinates.create(41.3851, 2.1734);

// When comparing, what matters is the values.
console.log(point1.equals(point2)); // false
// If it has the same values, it's the same Value Object.
console.log(point1.equals(Coordinates.create(40.4168, -3.7038))); // true
