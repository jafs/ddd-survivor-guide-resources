class CommandBusSpy implements CommandBus {
  public sent: Command[] = [];

  async send(command: Command): Promise<void> {
    this.sent.push(command);
  }
}

describe("EvacuationSaga", () => {
  test("on start, reserves a slot for the first pending survivor",
    async () => {
      const bus = new CommandBusSpy();
      const saga = new EvacuationSaga("mall", "prison", bus);

      await saga.onEvacuationStarted({
        type: "EvacuationStarted",
        survivorIds: ["1", "2"]
      });

      expect(bus.sent).toHaveLength(1);
      expect(bus.sent[0]).toMatchObject({
        type: "ReserveSlot",
        shelterId: "prison",
        survivorId: "1"
      });
    }
  );

  test("if there is no slot, compensates with the survivors still waiting",
    async () => {
      const bus = new CommandBusSpy();
      const saga = new EvacuationSaga("mall", "prison", bus);
      await saga.onEvacuationStarted({
        type: "EvacuationStarted",
        survivorIds: ["1", "2"]
      });

      await saga.onSlotUnavailable();

      const last = bus.sent[bus.sent.length - 1];
      expect(last).toMatchObject({
        type: "CancelEvacuation",
        shelterId: "mall",
        waitingSurvivors: ["1", "2"]
      });
    }
  );
});
