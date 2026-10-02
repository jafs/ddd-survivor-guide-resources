// BAD: ORM decorators pushed into the domain.
class Shelter {
  @Column()
  public id: string;

  @OneToMany(() => Survivor)
  public survivors: Survivor[]; // coupled to the ORM
}

// BAD: forcing access with a cast.
const shelter = new Shelter(row.id, row.capacity);
(shelter as any)["survivors"] = survivors.map(mapRow);
