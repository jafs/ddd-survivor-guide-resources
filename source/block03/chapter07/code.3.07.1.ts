// MAL: el agregado mezcla dominio y SQL.
class Refugio {
  public async guardar(): Promise<void> {
    await db.query(
      "UPDATE refugios SET capacidad = ? WHERE id = ?",
      [this.capacidad, this.id]
    );
    // ¿Y los supervivientes? ¿Otra tabla? ¿JSON?
  }
}
