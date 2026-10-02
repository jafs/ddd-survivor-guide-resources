// Only what's needed to shoot.
class SecuritySystem {
  private turrets: Turret[];
  private activeAlerts: Alert[];

  public activateTurrets(): void {
    this.turrets.forEach(t => t.activate());
  }

  public registerAlert(alert: Alert): void {
    this.activeAlerts.push(alert);
  }
}
