// Inside the Saga, when there's no slot available in any
// alternative shelter:
private async recordNoDestination(
  survivorId: string,
  reason: string
): Promise<void> {
  // It's a legitimate domain state with its own handling.
  this.phase = "noDestination";

  await noDestinationRegistry.record({
    survivorId,
    lastKnownLocation: this.originShelterId,
    reason
  });

  await alertService.sendUrgentNotification(
    "Survivor with no destination: " +
    "activate rescue protocol"
  );
}
