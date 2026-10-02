class Survivor {
  private skills: Skill[] = [];
  private static readonly MAX_SKILLS = 3;

  // Private constructor and factory method: see chapter 4.

  public learnSkill(skill: Skill): void {
    if (this.skills.length >= Survivor.MAX_SKILLS) {
      throw new Error(
        "A survivor can only master three skills"
      );
    }
    if (this.skills.includes(skill)) {
      throw new Error(
        `You already master the skill "${skill}"`
      );
    }
    this.skills.push(skill);
  }

  public getSkills(): Skill[] {
    return [...this.skills];
  }
}
