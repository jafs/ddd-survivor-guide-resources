describe("Admisión de supervivientes (end-to-end)", () => {
  test("POST /refugios/:id/admitir registra al superviviente",
    async () => {
      // Base de datos real, bus real, servidor levantado.
      await db.query(
        "INSERT INTO refugios (id, capacidad, contador_actual) " +
        "VALUES (?, ?, ?)",
        ["carcel-1", 20, 0]
      );

      const respuesta = await request(app)
        .post("/refugios/carcel-1/admitir")
        .send({ supervivienteId: "1", nombre: "Elena", salud: 100 });

      expect(respuesta.status).toBe(200);
      const fila = await db.query(
        "SELECT contador_actual FROM refugios WHERE id = ?",
        ["carcel-1"]
      );
      expect(fila.contador_actual).toBe(1);
    }
  );
});
