// Declared by the CONSUMER (main shelter). It's what it
// needs and nothing more.
const perimeterBreachedContract = {
  type: "PerimeterBreached",
  fields: {
    shelterId: "string",
    hostileCount: "number",
    occurredAt: "string"
  }
} as const;

// Runs in the PRODUCER's suite (mall).
describe("PerimeterBreached contract", () => {
  test("the published event conforms to what the consumer expects",
    () => {
      const event = toPerimeterBreachedIntegration({
        type: "PerimeterBreached",
        shelterId: "mall",
        sector: "north",
        hostileCount: 40,
        sectorStatus: SectorStatus.Compromised,
        occurredAt: "2026-08-19T22:10:00Z"
      });

      expect(event.type).toBe(perimeterBreachedContract.type);
      const published = event as Record<string, unknown>;
      for (const [field, expectedType] of Object.entries(
        perimeterBreachedContract.fields
      )) {
        expect(typeof published[field]).toBe(expectedType);
      }
    }
  );
});
