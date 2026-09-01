// Esto va en la capa de INFRAESTRUCTURA.
class RepositorioRefugioPostgreSQL
  implements RepositorioRefugio {

  async buscarPorId(id: string): Promise<Refugio | null> {
    const fila = await db.query(
      "SELECT * FROM refugios WHERE id = ?",
      [id]
    );
    if (!fila) return null;
    return Refugio.deInstantanea(fila);
  }

  async guardar(refugio: Refugio): Promise<void> {
    const snap = refugio.aInstantanea();
    await db.query(
      "INSERT INTO refugios ... ON CONFLICT UPDATE ...",
      [snap.id, snap.capacidad, snap.supervivientes.length]
    );
  }

  // ... resto de métodos.
}
