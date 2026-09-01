// dominio/errores.ts
class RefugioLlenoError extends Error {
  constructor(refugioId: string) {
    super(`El refugio ${refugioId} ha alcanzado su capacidad máxima`);
    this.name = "RefugioLlenoError";
  }
}

class SupervivienteInfectadoError extends Error {
  constructor(supervivienteId: string) {
    super(
      `El superviviente ${supervivienteId} está en cuarentena ` +
      `y no puede ser trasladado`
    );
    this.name = "SupervivienteInfectadoError";
  }
}
