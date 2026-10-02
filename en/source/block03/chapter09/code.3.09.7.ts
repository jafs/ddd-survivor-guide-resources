// Call to the Logistics use case that reacts to admissions.
eventBus.on("SurvivorAdmitted", (event) => {
  updateConsumptionHandler.handle(
    event.shelterId
  );
});

// Call to the Medical use case that reacts to admissions.
eventBus.on("SurvivorAdmitted", (event) => {
  scheduleCheckupHandler.handle(
    event.survivorId
  );
});

// Call to the Command use case that reacts to perimeter breaches.
eventBus.on("PerimeterBreached", (event) => {
  assessEvacuationHandler.handle(
    event.shelterId
  );
});

// Call to the Medical use case that sends alerts on quarantines.
eventBus.on("QuarantineActivated", (event) => {
  sendAlertHandler.handle(
    `Quarantine at ${event.shelterId}: ` +
    `${event.reason}`
  );
});
