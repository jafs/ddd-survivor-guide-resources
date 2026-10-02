// This goes in the INFRASTRUCTURE layer.
class ShelterRepositoryPostgreSQL
  implements ShelterRepository {

  async findById(id: string): Promise<Shelter | null> {
    const row = await db.query(
      "SELECT * FROM shelters WHERE id = ?",
      [id]
    );
    if (!row) return null;
    return Shelter.fromSnapshot(row);
  }

  async save(shelter: Shelter): Promise<void> {
    const snap = shelter.toSnapshot();
    await db.query(
      "INSERT INTO shelters ... ON CONFLICT UPDATE ...",
      [snap.id, snap.capacity, snap.survivors.length]
    );
  }

  // ... remaining methods.
}
