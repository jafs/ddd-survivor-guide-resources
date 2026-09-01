// dominio/servicio-traslado.ts
public trasladar(
  superviviente: Superviviente,
  refugioOrigen: Refugio,
  refugioDestino: Refugio
): void {
  if (superviviente.estaInfectado()) {
    throw new SupervivienteInfectadoError(superviviente.id);
  }

  if (!refugioDestino.tieneCapacidad()) {
    throw new RefugioLlenoError(refugioDestino.id);
  }

  // ...resto de reglas del capítulo 6.

  refugioOrigen.retirarSuperviviente(superviviente.id);
  refugioDestino.admitir(superviviente);
}
