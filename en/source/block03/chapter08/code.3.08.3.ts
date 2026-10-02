interface TransferSurvivorCommand {
  readonly originShelterId: string;
  readonly destinationShelterId: string;
  readonly survivorId: string;
}

class TransferSurvivorHandler {
  constructor(
    private shelterRepository: ShelterRepository,
    private transferService: TransferService
  ) {}

  async handle(
    cmd: TransferSurvivorCommand
  ): Promise<void> {
    // 1. Load entities and aggregates.
    const originShelter =
      await this.shelterRepository.findById(
        cmd.originShelterId
      );
    if (!originShelter) {
      throw new Error("Origin shelter not found.");
    }

    const destinationShelter =
      await this.shelterRepository.findById(
        cmd.destinationShelterId
      );
    if (!destinationShelter) {
      throw new Error("Destination shelter not found.");
    }

    const survivor =
      originShelter.findSurvivor(
        cmd.survivorId
      );
    if (!survivor) {
      throw new Error("Survivor not found.");
    }

    // 2. Invoke the domain service.
    this.transferService.transfer(
      survivor, originShelter, destinationShelter
    );

    // 3. Persist the aggregates.
    await this.shelterRepository.save(originShelter);
    await this.shelterRepository.save(destinationShelter);
  }
}
