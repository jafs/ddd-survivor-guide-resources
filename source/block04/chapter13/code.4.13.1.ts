import { describe, test, expect } from "vitest";

// Coordenadas genéricas para tests.
const COORDS_TEST = Coordenadas.crear(38.0, -3.0);

describe("Refugio - Gestión de capacidad", () => {
  test("admite supervivientes si hay capacidad",
    () => {
      const refugio = Refugio.fundar("Carcel 1", COORDS_TEST, 20);
      const superviviente = Superviviente.registrar("1", "Elena", 100);

      refugio.admitir(superviviente);

      expect(refugio.obtenerSupervivientes()).toHaveLength(1);
      expect(refugio.obtenerSupervivientes()[0].nombre).toBe("Elena");
    }
  );

  test("rechaza admisión si el refugio está lleno",
    () => {
      const refugio = Refugio.fundar("Carcel 1", COORDS_TEST, 2);
      refugio.admitir(Superviviente.registrar("1", "Elena", 100));
      refugio.admitir(Superviviente.registrar("2", "Marta", 90));

      expect(() => {
        refugio.admitir(Superviviente.registrar("3", "Diego", 70));
      }).toThrow("Refugio lleno");
    }
  );

  test("consolida suministros del mismo tipo",
    () => {
      const refugio = Refugio.fundar("Carcel 1", COORDS_TEST, 20);

      refugio.recibirSuministro(SuministroRefugio.registrar("vendas", 10));
      refugio.recibirSuministro(SuministroRefugio.registrar("antibioticos", 5));
      refugio.recibirSuministro(SuministroRefugio.registrar("vendas", 7));

      const suministros = refugio.obtenerSuministros();

      // No 3: las vendas se consolidaron.
      expect(suministros).toHaveLength(2);
      const vendas = suministros.find(
        s => s.nombre === "vendas"
      );

      // 10 + 7.
      expect(vendas?.cantidad).toBe(17);
    }
  );
});

describe("evaluarExposicion", () => {
  test("cuarentena con distancia menor de 2 metros",
    () => {
      const resultado = evaluarExposicion(1.5, 120);
      // Menos de 2 metros: cuarentena directa.
      expect(resultado.requiereCuarentena()).toBe(true);
    }
  );

  test("sin cuarentena fuera del rango de contagio",
    () => {
      const resultado = evaluarExposicion(25, 30);
      // A 25 metros no hay peligro.
      expect(resultado.requiereCuarentena()).toBe(false);
      expect(resultado.nivelRiesgo).toBe("sin_riesgo");
    }
  );
});
