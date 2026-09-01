describe("RepositorioRefugioPostgreSQL", () => {
  test("persiste y recupera un refugio",
    async () => {
      const repositorio = new RepositorioRefugioPostgreSQL();
      const refugio = Refugio.fundar(
        "Carcel Test", COORDS_TEST, 20
      );
      refugio.admitir(
        Superviviente.registrar("1", "Elena", 100)
      );

      await repositorio.guardar(refugio);
      const recuperado =
        await repositorio.buscarPorId(refugio.id);

      expect(recuperado).not.toBeNull();
      expect(recuperado?.obtenerSupervivientes())
        .toHaveLength(1);
    }
  );
});
