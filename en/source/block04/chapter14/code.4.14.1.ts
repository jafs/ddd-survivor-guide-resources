// Orange sticky note -> domain event type.
type SurvivorAdmitted = {
  type: "SurvivorAdmitted";
  eventId: string;
  shelterId: string;
  survivorId: string;
  occurredAt: string;
};

// Blue sticky note -> command (primitives only).
class AdmitSurvivorCommand {
  constructor(
    readonly shelterId: string,
    readonly survivorId: string,
    readonly name: string,
    readonly health: number
  ) {}
}

// Large yellow sticky note -> aggregate (excerpt).
class Shelter {
  // ...
  public admit(
    survivor: Survivor
  ): void {
    if (
      this.survivors.length + 1 >
      this.capacity
    ) {
      throw new Error("Shelter full");
    }
    this.survivors.push(survivor);
  }
}

// Purple sticky note -> listener / policy.
eventBus.on(
  "SurvivorAdmitted",
  async (event) => {
    await medicalService.scheduleCheckup(
      event.survivorId
    );
  }
);
