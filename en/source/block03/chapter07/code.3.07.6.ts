// Data only, no business logic.
interface SurvivorSnapshot {
  id: string;
  name: string;
  health: number;
  skills: string[];
}

class Survivor {
  // ...

  public toSnapshot(): SurvivorSnapshot {
    return {
      id: this._id,
      name: this._name,
      health: this._health,
      skills: [...this._skills]
    };
  }

  public static fromSnapshot(snap: SurvivorSnapshot): Survivor {
    // The constructor is private, but the class itself can call it.
    return new Survivor(
      snap.id,
      snap.name,
      snap.health,
      [...snap.skills]
    );
  }
}
