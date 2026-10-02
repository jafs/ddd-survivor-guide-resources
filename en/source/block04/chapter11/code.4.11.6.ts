// When starting each step, the Saga schedules its own timeout.
class EvacuationSaga {
  private timeoutHandle?: NodeJS.Timeout;

  private async reserveSlot(
    shelterId: string
  ): Promise<void> {
    await this.destinationRepository.reserveSlot(this.survivorId);
    this.phase = "awaiting_confirmation";

    // If neither SlotReserved nor SlotUnavailable arrives within 5
    // minutes, the Saga ends automatically.
    this.timeoutHandle = setTimeout(async () => {
      await this.recordNoDestination(
        this.survivorId,
        "Timeout: no response from destination shelter"
      );
    }, SAGA_TIMEOUT_5M);
  }

  public onSlotReserved(): void {
    clearTimeout(this.timeoutHandle);
    // The Saga continues normally.
  }
}
