describe("ShelterRepositoryPostgreSQL", () => {
  test("persists and retrieves a shelter",
    async () => {
      const repository = new ShelterRepositoryPostgreSQL();
      const shelter = Shelter.found(
        "Test Prison", TEST_COORDS, 20
      );
      shelter.admit(
        Survivor.register("1", "Elena", 100)
      );

      await repository.save(shelter);
      const retrieved =
        await repository.findById(shelter.id);

      expect(retrieved).not.toBeNull();
      expect(retrieved?.getSurvivors())
        .toHaveLength(1);
    }
  );
});
