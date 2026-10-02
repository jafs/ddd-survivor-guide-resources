eventBus.on("EvacuationStarted", (event) =>
  saga.onEvacuationStarted(event)
);
eventBus.on("SlotReserved", (event) =>
  saga.onSlotReserved(event)
);
eventBus.on("SlotUnavailable", () =>
  saga.onSlotUnavailable()
);
// And so on with the rest of the process's Events.
