// BAD: the domain smells like a database.
class Shelter {
  @Column()
  public id: string;

  @OneToMany(() => Survivor)
  public survivors: Survivor[];
}
