class SistemaSeguridad {
  private torretas: Torreta[];
  private alertasActivas: Alerta[];

  public activarTorretas(): void {
    // Invariante: solo se activan si hay una alerta activa.
    if (this.alertasActivas.length === 0) {
      throw new ActivacionSinAlertaError();
    }

    const activadas = this.torretas.filter(
      t => t.activar()
    );

    // Invariante: al menos el 50% de las torretas deben responder.
    const umbralMinimo =
      Math.ceil(this.torretas.length / 2);
    if (activadas.length < umbralMinimo) {
      throw new PerimetroComprometidoError(
        activadas.length,
        this.torretas.length
      );
    }
  }
}
