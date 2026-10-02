// DESTINATION SHELTER context. It reacts on its own.
eventBus.on("EvacuationStarted", async (event) => {
  for (const id of event.survivorIds) {
    await reserveSlotHandler.execute({
      shelterId: event.destinationShelterId,
      survivorId: id
    });
    // On saving, the Aggregate publishes SlotReserved.
  }
});

// ORIGIN SHELTER context. It knows neither who reserved nor why.
eventBus.on("SlotReserved", async (event) => {
  await removeSurvivorHandler.execute({
    shelterId: event.originShelterId,
    survivorId: event.survivorId
  });
  // Publishes SurvivorRemoved.
});

// DESTINATION SHELTER context again.
eventBus.on("SurvivorRemoved", async (event) => {
  await admitSurvivorHandler.execute({
    shelterId: event.destinationShelterId,
    survivorId: event.survivorId
  });
});
