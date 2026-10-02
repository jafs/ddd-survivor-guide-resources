type RiskLevel = "quarantine" | "observation" | "no_risk";

class ExposureResult {
  private constructor(
    private readonly _riskLevel: RiskLevel
  ) {}

  static quarantine(): ExposureResult {
    return new ExposureResult("quarantine");
  }

  static observation(): ExposureResult {
    return new ExposureResult("observation");
  }

  static noRisk(): ExposureResult {
    return new ExposureResult("no_risk");
  }

  get riskLevel(): RiskLevel { return this._riskLevel; }

  requiresQuarantine(): boolean {
    return this._riskLevel === "quarantine";
  }
}
