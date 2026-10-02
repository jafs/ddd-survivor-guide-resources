// domain/transfer-service.ts
public transfer(
  survivor: Survivor,
  originShelter: Shelter,
  destinationShelter: Shelter
): void {
  if (survivor.isInfected()) {
    throw new InfectedSurvivorError(survivor.id);
  }

  if (!destinationShelter.hasCapacity()) {
    throw new ShelterFullError(destinationShelter.id);
  }

  // ...remaining rules from chapter 6.

  originShelter.removeSurvivor(survivor.id);
  destinationShelter.admit(survivor);
}
