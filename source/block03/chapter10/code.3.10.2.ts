// Adaptador de radio: implementa el Puerto.
class ServicioAlertasRadio implements ServicioAlertas {
  async enviarAlertaUrgente(
    mensaje: string
  ): Promise<void> {
    await this.radioDevice.transmit(
      mensaje,
      { frequency: ServicioAlertasRadio.FRECUENCIA_ALERTA }
    );
  }
}
