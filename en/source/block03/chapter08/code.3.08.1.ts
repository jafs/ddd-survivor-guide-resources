// The Command represents the intent and only contains data.
interface AdmitSurvivorCommand {
  readonly shelterId: string;
  readonly survivorId: string;
  readonly name: string;
  readonly health: number;
}

// The Handler is the one that carries out the intent.
class AdmitSurvivorHandler {
  constructor(
    private shelterRepository: ShelterRepository
  ) {}

  async handle(cmd: AdmitSurvivorCommand): Promise<void> {
    // 1. Load the aggregate from the repository.
    const shelter = await this.shelterRepository.findById(cmd.shelterId);
    if (!shelter) {
      throw new Error("Shelter not found.");
    }

    // 2. Build the domain object.
    const survivor = Survivor.register(
      cmd.survivorId,
      cmd.name,
      cmd.health
    );

    // 3. Invoke the domain method.
    // THIS is where the business rules are validated.
    shelter.admit(survivor);

    // 4. Persist the changes.
    await this.shelterRepository.save(shelter);
  }
}
