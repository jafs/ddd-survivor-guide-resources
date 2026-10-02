class EvacuationSaga {
  private transferred: string[] = [];
  private phase:
    | "starting"
    | "transferring"
    | "completed"
    | "compensating"
    | "noDestination" = "starting";

  // Extract the state to persist it.
  public toState(): object {
    return {
      pending: this.pending,
      transferred: this.transferred,
      phase: this.phase
    };
  }

  // Rebuild the Saga from the saved state.
  public static fromState(
    state: Record<string, unknown>
  ): EvacuationSaga {
    const saga = new EvacuationSaga();
    saga.pending =
      state["pending"] as string[];
    saga.transferred =
      state["transferred"] as string[];
    saga.phase =
      state["phase"] as typeof saga.phase;
    return saga;
  }
}
