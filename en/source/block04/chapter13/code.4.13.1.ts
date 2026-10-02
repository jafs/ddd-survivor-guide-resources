import { describe, test, expect } from "vitest";

// Generic coordinates for tests.
const TEST_COORDS = Coordinates.create(38.0, -3.0);

describe("Shelter - Capacity management", () => {
  test("admits survivors if there is capacity",
    () => {
      const shelter = Shelter.found("Prison 1", TEST_COORDS, 20);
      const survivor = Survivor.register("1", "Elena", 100);

      shelter.admit(survivor);

      expect(shelter.getSurvivors()).toHaveLength(1);
      expect(shelter.getSurvivors()[0].name).toBe("Elena");
    }
  );

  test("rejects admission if the shelter is full",
    () => {
      const shelter = Shelter.found("Prison 1", TEST_COORDS, 2);
      shelter.admit(Survivor.register("1", "Elena", 100));
      shelter.admit(Survivor.register("2", "Marta", 90));

      expect(() => {
        shelter.admit(Survivor.register("3", "Diego", 70));
      }).toThrow("Shelter full");
    }
  );

  test("consolidates supplies of the same kind",
    () => {
      const shelter = Shelter.found("Prison 1", TEST_COORDS, 20);

      shelter.receiveSupply(ShelterSupply.register("bandages", 10));
      shelter.receiveSupply(ShelterSupply.register("antibiotics", 5));
      shelter.receiveSupply(ShelterSupply.register("bandages", 7));

      const supplies = shelter.getSupplies();

      // Not 3: the bandages were consolidated.
      expect(supplies).toHaveLength(2);
      const bandages = supplies.find(
        s => s.name === "bandages"
      );

      // 10 + 7.
      expect(bandages?.quantity).toBe(17);
    }
  );
});

describe("assessExposure", () => {
  test("quarantine when the distance is under 2 meters",
    () => {
      const result = assessExposure(1.5, 120);
      // Less than 2 meters: straight into quarantine.
      expect(result.requiresQuarantine()).toBe(true);
    }
  );

  test("no quarantine outside the contagion range",
    () => {
      const result = assessExposure(25, 30);
      // At 25 meters there's no danger.
      expect(result.requiresQuarantine()).toBe(false);
      expect(result.riskLevel).toBe("no_risk");
    }
  );
});
