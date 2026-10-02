eventBus.on(
  "SurvivorAdmitted",
  async (event) => {
    // Check before acting.
    const scheduled = await medicalRepository.hasCheckupScheduledFor(
      event.survivorId
    );

    if (scheduled) return; // It was already scheduled.

    await scheduleCheckupHandler.handle(event.survivorId);
  }
);
