class Coordenadas {
  private constructor(
    private readonly _latitud: number,
    private readonly _longitud: number
  ) {
    if (_latitud < -90 || _latitud > 90) {
      throw new Error(
        `Latitud inválida: ${_latitud}. Debe estar entre -90 y 90.`
      );
    }
    if (_longitud < -180 || _longitud > 180) {
      throw new Error(
        `Longitud inválida: ${_longitud}. Debe estar entre -180 y 180.`
      );
    }
  }

  static crear(latitud: number, longitud: number): Coordenadas {
    return new Coordenadas(latitud, longitud);
  }

  get latitud(): number { return this._latitud; }
  get longitud(): number { return this._longitud; }

  // Dos puntos con valores idénticos son el mismo punto.
  equals(otras: Coordenadas): boolean {
    return this._latitud === otras._latitud &&
      this._longitud === otras._longitud;
  }

  // Lógica de negocio: saber si dos puntos están cerca.
  esCercana(otras: Coordenadas, radioKm: number): boolean {
    const KM_POR_GRADO = 111; // Aproximación: 1 grado ≈ 111 km
    const difLat = Math.abs(this._latitud - otras._latitud);
    const difLon = Math.abs(this._longitud - otras._longitud);
    const distanciaAprox = Math.sqrt(
      (difLat * KM_POR_GRADO) ** 2 + (difLon * KM_POR_GRADO) ** 2
    );
    return distanciaAprox <= radioKm;
  }
}

// Las coordenadas nunca se cambian, se crean.
const punto1 = Coordenadas.crear(40.4168, -3.7038);
const punto2 = Coordenadas.crear(41.3851, 2.1734);

// A la hora de comparar lo importante son los valores
console.log(punto1.equals(punto2)); // false
// Si tiene los mismos valores es el mismo Objeto de Valor
console.log(punto1.equals(Coordenadas.crear(40.4168, -3.7038))); // true
