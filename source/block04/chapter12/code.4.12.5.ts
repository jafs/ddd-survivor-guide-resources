// MAL: El dominio da tufillo a base de datos.
class Refugio {
  @Column()
  public id: string;

  @OneToMany(() => Superviviente)
  public supervivientes: Superviviente[];
}
