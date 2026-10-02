// Domain layer: what we need, not how it's stored.
interface ShelterRepository {
  // Locate a shelter by its identifier.
  findById(id: string): Promise<Shelter | null>;

  // Register or update the shelter's data.
  save(shelter: Shelter): Promise<void>;

  // Find shelters within a scouting radius.
  findNearby(coords: Coordinates, radiusKm: number): Promise<Shelter[]>;

  // List shelters with room for more survivors.
  findWithCapacity(): Promise<Shelter[]>;
}
