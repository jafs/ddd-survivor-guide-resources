// Regla del dominio: determina el nivel de riesgo de una exposición
// a infectados y si obliga a entrar en cuarentena.
function evaluarExposicion(
  distanciaMetros: number,
  minutosExposicion: number
): ResultadoExposicion {
  // Menos de 2 metros: cuarentena directa.
  if (distanciaMetros < 2) {
    return ResultadoExposicion.cuarentena();
  }

  // Entre 2 y 5 metros durante al menos media hora: cuarentena.
  if (distanciaMetros < 5 && minutosExposicion >= 30) {
    return ResultadoExposicion.cuarentena();
  }

  // Entre 2 y 5 metros menos de media hora: observación.
  if (distanciaMetros < 5 && minutosExposicion >= 10) {
    return ResultadoExposicion.observacion();
  }

  return ResultadoExposicion.sinRiesgo();
}

const caso1 = evaluarExposicion(5, 30);
console.log(caso1.nivelRiesgo);    // "sin_riesgo" — justo en el límite
const caso2 = evaluarExposicion(4, 30);
console.log(caso2.nivelRiesgo);    // "cuarentena" — demasiado cerca y tiempo
const caso3 = evaluarExposicion(1, 5);
console.log(caso3.nivelRiesgo);    // "cuarentena" — distancia crítica
const caso4 = evaluarExposicion(3, 15);
console.log(caso4.nivelRiesgo);    // "observacion" — exposición moderada
