// Create the new shelter with capacity for 3 survivors.
const mallShelter = Shelter.found(
  "Shopping Mall",
  Coordinates.create(40.4708, -3.7038),
  3
);

// Admit the first three members of the team.
mallShelter.admit(
  Survivor.register("s-001", "Santi", 80)
);
mallShelter.admit(
  Survivor.register("s-002", "Octavia", 90)
);
mallShelter.admit(
  Survivor.register("s-003", "Clara", 85)
);

// If we try to admit you as the fourth survivor...
// mallShelter.admit(
//   Survivor.register("s-004", "you", 70)
// );
// Error: "Shelter full: we can't admit more survivors"
// The invariant keeps the rule from being broken.

// Add supplies.
mallShelter.receiveSupply(
  ShelterSupply.register("bandages", 10)
);
console.log(mallShelter.getSupplies());
// [ShelterSupply { name: "bandages", quantity: 10 }]

// If more bandages are added, they're summed automatically.
mallShelter.receiveSupply(
  ShelterSupply.register("bandages", 7)
);
console.log(mallShelter.getSupplies());
// [ShelterSupply { name: "bandages", quantity: 17 }]
// Notice there aren't two "bandages" entries: they've been consolidated.
