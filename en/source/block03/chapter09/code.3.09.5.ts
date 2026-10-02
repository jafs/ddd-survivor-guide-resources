class Shelter {
  // The events that have occurred during this operation.
  private readonly domainEvents: DomainEvent[] = [];

  public admit(s: Survivor): void {
    if (this.survivors.length + 1 > this._capacity) {
      throw new Error(
        "Shelter full: we can't admit more survivors"
      );
    }
    this.survivors.push(s);

    // The event is born where the fact happens.
    this.domainEvents.push({
      type: "SurvivorAdmitted",
      eventId: crypto.randomUUID(),
      shelterId: this.id,
      survivorId: s.id,
      occurredAt: new Date().toISOString()
    });
  }

  // The Handler calls this after saving the aggregate.
  public pullDomainEvents(): DomainEvent[] {
    const events = [...this.domainEvents];
    // Empty it so they aren't published twice.
    this.domainEvents.length = 0;
    return events;
  }
}

// The Handler no longer builds the event: it collects it from the aggregate.
class AdmitSurvivorHandler {
  constructor(
    private shelterRepository: ShelterRepository,
    private eventBus: EventBus
  ) {}

  async handle(
    cmd: AdmitSurvivorCommand
  ): Promise<void> {
    const shelter =
      await this.shelterRepository.findById(
        cmd.shelterId
      );
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

    // The events are ready: the aggregate prepared them.
    for (const event of shelter.pullDomainEvents()) {
      await this.eventBus.publish(event);
    }
  }
}
