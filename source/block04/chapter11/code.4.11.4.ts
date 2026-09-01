class SagaEvacuacion {
  private trasladados: string[] = [];
  private fase:
    | "iniciando"
    | "transfiriendo"
    | "completada"
    | "compensando"
    | "sinDestino" = "iniciando";

  // Extrae el estado para persistirlo.
  public toState(): object {
    return {
      pendientes: this.pendientes,
      trasladados: this.trasladados,
      fase: this.fase
    };
  }

  // Reconstruye la Saga desde el estado guardado.
  public static fromState(
    state: Record<string, unknown>
  ): SagaEvacuacion {
    const saga = new SagaEvacuacion();
    saga.pendientes =
      state["pendientes"] as string[];
    saga.trasladados =
      state["trasladados"] as string[];
    saga.fase =
      state["fase"] as typeof saga.fase;
    return saga;
  }
}
