// REST API: presentation layer.
app.post(
  "/shelters/:id/admit",
  async (req, res) => {
    const command: AdmitSurvivorCommand = {
      shelterId: req.params.id,
      survivorId: req.body.survivorId,
      name: req.body.name,
      health: req.body.health
    };

    await admitSurvivorHandler.handle(command);

    res.status(200).json({ message: "Survivor admitted" });
  }
);
