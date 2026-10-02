class ShelterStatusQuery {
  constructor(
    private readonly finder: ShelterStatusFinder
  ) {}

  async handle(shelterId: string): Promise<ShelterStatus> {
    return this.finder.getStatus(shelterId);
  }
}
