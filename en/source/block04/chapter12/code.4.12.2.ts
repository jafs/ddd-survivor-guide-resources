// BAD: one aggregate to rule them all, like the One Ring.
class CommandCenter {
  private turrets: Turret[];
  private guardShifts: GuardShift[];
  private survivors: Survivor[];
  private supplies: Supply[];
  private medicalRecords: MedicalRecord[];
  private generators: PowerGenerator[];
  private weatherData: WeatherData[];
  private nearbyThreats: Zombie[];
  private alliances: Alliance[];
  private historicalEvents: HistoricalEvent[];
  // ... and 21 more collections.

  public activateTurrets(): void {
    this.turrets.forEach(t => t.activate());
  }
}
