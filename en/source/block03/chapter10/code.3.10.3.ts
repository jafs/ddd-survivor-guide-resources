// domain/errors.ts
class ShelterFullError extends Error {
  constructor(shelterId: string) {
    super(`Shelter ${shelterId} has reached its maximum capacity`);
    this.name = "ShelterFullError";
  }
}

class InfectedSurvivorError extends Error {
  constructor(survivorId: string) {
    super(
      `Survivor ${survivorId} is in quarantine ` +
      `and can't be transferred`
    );
    this.name = "InfectedSurvivorError";
  }
}
