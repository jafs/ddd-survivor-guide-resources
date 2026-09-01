// MAL: Decoradores del ORM metidos en el dominio.
class Refugio {
  @Column()
  public id: string;

  @OneToMany(() => Superviviente)
  public supervivientes: Superviviente[]; // acoplado al ORM
}

// MAL: Forzar el acceso con un cast.
const refugio = new Refugio(fila.id, fila.capacidad);
(refugio as any)["supervivientes"] = supervivientes.map(mapFila);
