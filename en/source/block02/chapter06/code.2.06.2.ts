// Domain rule: determine the risk level of an exposure to infected
// people and whether it forces quarantine.
function assessExposure(
  distanceMeters: number,
  exposureMinutes: number
): ExposureResult {
  // Less than 2 meters: straight into quarantine.
  if (distanceMeters < 2) {
    return ExposureResult.quarantine();
  }

  // Between 2 and 5 meters for at least half an hour: quarantine.
  if (distanceMeters < 5 && exposureMinutes >= 30) {
    return ExposureResult.quarantine();
  }

  // Between 2 and 5 meters for less than half an hour: observation.
  if (distanceMeters < 5 && exposureMinutes >= 10) {
    return ExposureResult.observation();
  }

  return ExposureResult.noRisk();
}

const case1 = assessExposure(5, 30);
console.log(case1.riskLevel);    // "no_risk": right at the limit
const case2 = assessExposure(4, 30);
console.log(case2.riskLevel);    // "quarantine": too close for too long
const case3 = assessExposure(1, 5);
console.log(case3.riskLevel);    // "quarantine": critical distance
const case4 = assessExposure(3, 15);
console.log(case4.riskLevel);    // "observation": moderate exposure
