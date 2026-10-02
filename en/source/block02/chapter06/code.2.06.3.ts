class TransferService {
  // The aggregates arrive with their data: this service doesn't access
  // external sources.
  public transfer(
    survivor: Survivor,
    originShelter: Shelter,
    destinationShelter: Shelter
  ): void {
    // An infected person doesn't leave quarantine. Not even on Nora's orders.
    if (survivor.isInfected()) {
      throw new Error(
        "An infected survivor can't be transferred."
      );
    }

    // We don't send people to a full shelter. Remember that Murphy
    // doesn't negotiate where survival is concerned.
    if (!destinationShelter.hasCapacity()) {
      throw new Error(
        `Shelter ${destinationShelter.id} has no capacity.`
      );
    }

    // If Rocío leaves and nobody with medical knowledge remains, the
    // origin shelter is left exposed.
    if (survivor.isSpecialist() &&
      originShelter.wouldBeUnsafeWithout(survivor)) {
      throw new Error(
        `${survivor.name} is a specialist: ` +
        `leaving would put the shelter in a critical situation.`
      );
    }

    // Apply the transfer on both aggregates.
    originShelter.removeSurvivor(survivor.id);
    destinationShelter.admit(survivor);
  }
}
