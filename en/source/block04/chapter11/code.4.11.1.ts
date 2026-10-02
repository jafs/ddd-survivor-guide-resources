// APPLICATION layer.
class TransferSurvivor {
  constructor(
    private readonly repository: ShelterRepository,
    private readonly unitOfWork: UnitOfWork
  ) {}

  async execute(
    originShelterId: string,
    destinationShelterId: string,
    survivorId: string
  ): Promise<void> {
    await this.unitOfWork.execute(async () => {
      const origin = await this.repository.findById(originShelterId);
      const destination = await this.repository.findById(destinationShelterId);

      // The domain rules still apply.
      const survivor = origin.getSurvivors()
        .find(s => s.id === survivorId)!;
      origin.removeSurvivor(survivorId);
      destination.admit(survivor);

      // If anything fails, the unit of work rolls both back.
      await this.repository.save(origin);
      await this.repository.save(destination);
    });
  }
}
