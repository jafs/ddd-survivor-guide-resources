// Dentro de la Saga, cuando no hay plaza disponible en ningún
// refugio alternativo:
private async registrarSinDestino(
  supervivienteId: string,
  motivo: string
): Promise<void> {
  // Es un estado legítimo del dominio con su propio tratamiento.
  this.fase = "sinDestino";

  await registroSinDestino.registrar({
    supervivienteId,
    ultimaUbicacionConocida: this.refugioOrigenId,
    motivo
  });

  await servicioAlertas.enviarNotificacionUrgente(
    "Superviviente sin destino: " +
    "activar protocolo de rescate"
  );
}
