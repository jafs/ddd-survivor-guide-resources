// The channel the Saga sends Commands through. Each one
// is picked up by its corresponding Handler.
interface CommandBus {
  send(command: Command): Promise<void>;
}

// APPLICATION layer. It orchestrates the process; the business
// rules stay inside each Aggregate.
class EvacuationSaga {
  private pending: string[] = [];
  private transferred: string[] = [];
  private phase:
    | "starting"
    | "transferring"
    | "completed"
    | "compensating" = "starting";

  constructor(
    private readonly originShelterId: string,
    private readonly destinationShelterId: string,
    private readonly commandBus: CommandBus
  ) {}

  // Step 0: the mall marks the evacuation.
  async onEvacuationStarted(
    event: EvacuationStarted
  ): Promise<void> {
    this.pending = [...event.survivorIds];
    this.phase = "transferring";
    await this.reserveNextSlot();
  }

  // Step 1 -> 2: there's a slot, we take the person out of the mall.
  async onSlotReserved(
    event: SlotReserved
  ): Promise<void> {
    await this.commandBus.send({
      type: "RemoveSurvivor",
      shelterId: this.originShelterId,
      survivorId: event.survivorId
    });
  }

  // Step 2 -> 3: they're out, we admit them at the destination.
  async onSurvivorRemoved(
    event: SurvivorRemoved
  ): Promise<void> {
    await this.commandBus.send({
      type: "AdmitSurvivor",
      shelterId: this.destinationShelterId,
      survivorId: event.survivorId
    });
  }

  // Step 3: the cycle is complete. Next person or the end.
  async onSurvivorAdmitted(
    event: SurvivorAdmitted
  ): Promise<void> {
    this.transferred.push(event.survivorId);
    this.pending = this.pending.filter(
      (id) => id !== event.survivorId
    );
    if (this.pending.length === 0) {
      this.phase = "completed";
      return;
    }
    await this.reserveNextSlot();
  }

  // Compensation: new actions, not a rollback.
  async onSlotUnavailable(): Promise<void> {
    this.phase = "compensating";
    await this.commandBus.send({
      type: "CancelEvacuation",
      shelterId: this.originShelterId,
      waitingSurvivors: this.pending
    });
  }

  private async reserveNextSlot(): Promise<void> {
    await this.commandBus.send({
      type: "ReserveSlot",
      shelterId: this.destinationShelterId,
      survivorId: this.pending[0]
    });
  }
}
