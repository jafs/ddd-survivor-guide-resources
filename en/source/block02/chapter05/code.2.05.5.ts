type Skill =
  | "first-aid"
  | "combat"
  | "mechanics"
  | "scouting";

class Survivor {
  private skills: Skill[] = [];

  // Private constructor and factory method: see chapter 4.

  public learnSkill(skill: Skill): void {
    if (this.skills.includes(skill)) {
      return;
    }
    this.skills.push(skill);
  }

  public getSkills(): Skill[] {
    return [...this.skills];
  }
}
