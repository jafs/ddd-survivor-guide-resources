// Data only, no business logic.
interface ShelterSnapshot {
  id: string;
  name: string;
  coordinates: { latitude: number; longitude: number };
  capacity: number;
  survivors: SurvivorSnapshot[];
}

// Shelter class defined in chapter 5.
// Two methods are added for the Snapshot pattern.
class Shelter {
  // ...

  // So the repository can persist the state.
  public toSnapshot(): ShelterSnapshot {
    return {
      id: this.id,
      name: this.name,
      coordinates: {
        latitude: this.coordinates.latitude,
        longitude: this.coordinates.longitude
      },
      capacity: this.capacity,
      survivors: this.survivors.map(s => s.toSnapshot())
    };
  }

  // Reconstitution: the shelter already existed, we're just bringing it back.
  public static fromSnapshot(
    snap: ShelterSnapshot
  ): Shelter {
    return new Shelter(
      snap.id,
      snap.name,
      Coordinates.create(
        snap.coordinates.latitude,
        snap.coordinates.longitude
      ),
      snap.capacity,
      snap.survivors.map(Survivor.fromSnapshot)
    );
  }
}
