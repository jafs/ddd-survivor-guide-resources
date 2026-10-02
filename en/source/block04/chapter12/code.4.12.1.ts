// BAD: anemic model.
class Shelter {
  public id: string;
  public capacity: number;
  public currentCount: number;
  public survivors: Survivor[] = [];

  public getSurvivors() {
    return this.survivors;
  }
  public setSurvivors(
    s: Survivor[]
  ) {
    this.survivors = s;
  }
  public getCurrentCount() {
    return this.currentCount;
  }
  public setCurrentCount(n: number) {
    this.currentCount = n;
  }
}

// All the logic lives in a separate service.
class ShelterService {
  admitSurvivor(
    shelter: Shelter,
    survivor: Survivor
  ) {
    if (
      shelter.getCurrentCount() + 1 >
      shelter.capacity
    ) {
      throw new Error("Shelter full");
    }
    shelter.getSurvivors().push(
      survivor
    );
    shelter.setCurrentCount(
      shelter.getCurrentCount() + 1
    );
  }
}
