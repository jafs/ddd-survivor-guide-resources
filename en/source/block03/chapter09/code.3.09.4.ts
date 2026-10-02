// The channel events are published through.
interface EventBus {
  publish(event: DomainEvent): Promise<void>;
}

class AdmitSurvivorHandler {
  constructor(
    private shelterRepository: ShelterRepository,
    private eventBus: EventBus
  ) {}

  async handle(
    cmd: AdmitSurvivorCommand
  ): Promise<void> {
    const shelter =
      await this.shelterRepository.findById(cmd.shelterId);

    if (!shelter) {
      throw new Error("Shelter not found.");
    }

    const survivor = Survivor.register(
      cmd.survivorId,
      cmd.name,
      cmd.health
    );
    shelter.admit(survivor);
    await this.shelterRepository.save(shelter);

    // If everything went well, notify the event.
    await this.eventBus.publish({
      type: "SurvivorAdmitted",
      eventId: crypto.randomUUID(),
      shelterId: shelter.id,
      survivorId: cmd.survivorId,
      occurredAt: new Date().toISOString()
    });
  }
}
