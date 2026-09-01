// Al iniciar cada paso, la Saga programa su propio timeout.
class SagaEvacuacion {
  private timeoutHandle?: NodeJS.Timeout;

  private async reservarPlaza(
    refugioId: string
  ): Promise<void> {
    await this.repositorioDestino.reservarPlaza(this.supervivienteId);
    this.fase = "esperando_confirmacion";

    // Si en 5 minutos no llega PlazaReservada ni PlazaNoDisponible, la
    // Saga termina automáticamente.
    this.timeoutHandle = setTimeout(async () => {
      await this.registrarSinDestino(
        this.supervivienteId,
        "Timeout: sin respuesta del refugio destino"
      );
    }, SAGA_TIMEOUT_5M);
  }

  public onPlazaReservada(): void {
    clearTimeout(this.timeoutHandle);
    // Continúa la Saga normalmente.
  }
}
