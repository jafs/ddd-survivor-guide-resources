// The read side listens to the write side.
// Each Event moves the counter in one direction.
eventBus.on("SurvivorAdmitted", async (event) => {
  await statusProjection.incrementSurvivors(event.shelterId);
});

// And subtract when someone leaves or falls.
eventBus.on("SurvivorDischarged", async (event) => {
  await statusProjection.decrementSurvivors(event.shelterId);
});
