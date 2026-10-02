// infrastructure/http/shelter-controller.ts
async transferSurvivor(req: Request, res: Response) {
  const command: TransferSurvivorCommand = {
    originShelterId: req.body.originShelterId,
    destinationShelterId: req.body.destinationShelterId,
    survivorId: req.body.survivorId,
  };

  try {
    await this.handler.handle(command);
    res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof ShelterFullError) {
      res.status(409).json({ error: error.message });
    } else if (error instanceof InfectedSurvivorError) {
      res.status(422).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal error" });
    }
  }
}
