// Repository substitute: a Map instead of a table.
class ShelterRepositoryInMemory implements ShelterRepository {
  private shelters = new Map<string, Shelter>();

  async findById(id: string): Promise<Shelter | null> {
    return this.shelters.get(id) ?? null;
  }

  async save(shelter: Shelter): Promise<void> {
    this.shelters.set(shelter.id, shelter);
  }
}

// Bus substitute: it delivers nothing, it only takes notes.
class EventBusSpy implements EventBus {
  public published: DomainEvent[] = [];

  async publish(event: DomainEvent): Promise<void> {
    this.published.push(event);
  }

  on(): void {
    // Nobody is listening in this test.
  }
}

describe("AdmitSurvivorHandler", () => {
  test("admits, saves, and publishes SurvivorAdmitted",
    async () => {
      const repository = new ShelterRepositoryInMemory();
      const bus = new EventBusSpy();
      const prison = Shelter.found("Prison 1", TEST_COORDS, 20);
      await repository.save(prison);
      const handler = new AdmitSurvivorHandler(
        repository,
        bus
      );

      await handler.handle({
        shelterId: prison.id,
        survivorId: "1",
        name: "Elena",
        health: 100
      });

      const shelter = await repository.findById(prison.id);
      expect(shelter?.getSurvivors()).toHaveLength(1);
      expect(bus.published).toHaveLength(1);
      expect(bus.published[0].type).toBe("SurvivorAdmitted");
    }
  );

  test("fails if the shelter does not exist",
    async () => {
      const handler = new AdmitSurvivorHandler(
        new ShelterRepositoryInMemory(),
        new EventBusSpy()
      );

      await expect(
        handler.handle({
          shelterId: "does-not-exist",
          survivorId: "1",
          name: "Elena",
          health: 100
        })
      ).rejects.toThrow("Shelter not found");
    }
  );
});
