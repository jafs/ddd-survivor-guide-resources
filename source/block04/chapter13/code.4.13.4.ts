// Lo declara el CONSUMIDOR (refugio principal). Es lo que
// necesita y nada más.
const contratoPerimetroVulnerado = {
  tipo: "PerimetroVulnerado",
  campos: {
    refugioId: "string",
    numHostiles: "number",
    momento: "string"
  }
} as const;

// Se ejecuta en la suite del PRODUCTOR (centro comercial).
describe("Contrato PerimetroVulnerado", () => {
  test("el evento publicado respeta lo que espera el consumidor",
    () => {
      const evento = aPerimetroVulneradoIntegracion({
        tipo: "PerimetroVulnerado",
        refugioId: "centro-comercial",
        sector: "norte",
        numHostiles: 40,
        estadoSector: EstadoSector.Comprometido,
        momento: "2026-08-19T22:10:00Z"
      });

      expect(evento.tipo).toBe(contratoPerimetroVulnerado.tipo);
      const publicado = evento as Record<string, unknown>;
      for (const [campo, tipoEsperado] of Object.entries(
        contratoPerimetroVulnerado.campos
      )) {
        expect(typeof publicado[campo]).toBe(tipoEsperado);
      }
    }
  );
});
