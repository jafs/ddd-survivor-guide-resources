describe("Survivor admission (end-to-end)", () => {
  test("POST /shelters/:id/admit registers the survivor",
    async () => {
      // Real database, real bus, server running.
      await db.query(
        "INSERT INTO shelters (id, capacity, current_count) " +
        "VALUES (?, ?, ?)",
        ["prison-1", 20, 0]
      );

      const response = await request(app)
        .post("/shelters/prison-1/admit")
        .send({ survivorId: "1", name: "Elena", health: 100 });

      expect(response.status).toBe(200);
      const row = await db.query(
        "SELECT current_count FROM shelters WHERE id = ?",
        ["prison-1"]
      );
      expect(row.current_count).toBe(1);
    }
  );
});
