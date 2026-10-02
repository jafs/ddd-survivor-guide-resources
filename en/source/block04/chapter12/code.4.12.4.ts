class SecuritySystem {
  private turrets: Turret[];
  private activeAlerts: Alert[];

  public activateTurrets(): void {
    // Invariant: only activate if there's an active alert.
    if (this.activeAlerts.length === 0) {
      throw new ActivationWithoutAlertError();
    }

    const activated = this.turrets.filter(
      t => t.activate()
    );

    // Invariant: at least 50% of the turrets must respond.
    const minThreshold =
      Math.ceil(this.turrets.length / 2);
    if (activated.length < minThreshold) {
      throw new PerimeterCompromisedError(
        activated.length,
        this.turrets.length
      );
    }
  }
}
