// BAD: the aggregate mixes domain and SQL.
class Shelter {
  public async save(): Promise<void> {
    await db.query(
      "UPDATE shelters SET capacity = ? WHERE id = ?",
      [this.capacity, this.id]
    );
    // And the survivors? Another table? JSON?
  }
}
