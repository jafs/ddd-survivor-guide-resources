// Entity: has an identity of its own through the identifier.
class Survivor {
  private constructor(
    private readonly _id: string,
    private _name: string,
    private _health: number,
    private _skills: string[] = []
  ) {
    if (!_id) throw new Error("The identifier can't be empty.");
    if (!_name) throw new Error("The name can't be empty.");
    if (_health < 0 || _health > 100)
      throw new Error("Health must be between 0 and 100.");
  }

  // Register a new survivor. If they arrive injured, you specify their health.
  public static register(
    id: string,
    name: string,
    health: number = 100
  ): Survivor {
    return new Survivor(id, name, health);
  }

  public get id(): string { return this._id; }
  public get name(): string { return this._name; }
  public get health(): number { return this._health; }
  // Return a copy so nobody can mutate the array from outside.
  public get skills(): string[] { return [...this._skills]; }

  // Health can't be negative. The minimum is 0.
  public takeInjury(points: number): void {
    this._health = Math.max(0, this._health - points);
  }

  // Health can't go above 100 points.
  public heal(points: number): void {
    this._health = Math.min(100, this._health + points);
  }

  // Learned skills aren't repeated and aren't forgotten.
  public learnSkill(skill: string): void {
    if (this._skills.includes(skill)) {
      return;
    }
    this._skills.push(skill);
  }

  // Two people with the same first name and the same health are still
  // different people.
  public equals(other: Survivor): boolean {
    return this._id === other._id;
  }
}

// Elsa Ruiz arrives at the shelter with a minor injury.
const elsaRuiz = Survivor.register("elsa-ruiz", "Elsa", 90);
elsaRuiz.takeInjury(10);               // health: 80, still Elsa
elsaRuiz.heal(15);                     // health: 95, still Elsa
elsaRuiz.learnSkill("stealth");        // skills: ["stealth"]
elsaRuiz.learnSkill("stealth");        // already has it, not duplicated

// Elsa Fernández arrives after days hiding in different shelters.
const elsaFernandez = Survivor.register("elsa-fernandez", "Elsa", 95);
elsaFernandez.learnSkill("stealth");

// Even with the same first name, the same health, and the same skills,
// they are NOT the same person.
console.log(elsaRuiz.equals(elsaFernandez));
// false, different identifier
