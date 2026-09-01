// Solo lo que hace falta para disparar.
class SistemaSeguridad {
  private torretas: Torreta[];
  private alertasActivas: Alerta[];

  public activarTorretas(): void {
    this.torretas.forEach(t => t.activar());
  }

  public registrarAlerta(alerta: Alerta): void {
    this.alertasActivas.push(alerta);
  }
}
