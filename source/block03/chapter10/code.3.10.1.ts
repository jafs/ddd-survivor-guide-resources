// Puerto para notificaciones.
interface ServicioAlertas {
  enviarAlertaUrgente(mensaje: string): Promise<void>;
}
