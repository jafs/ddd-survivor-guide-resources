// Radio adapter: implements the Port.
class AlertServiceRadio implements AlertService {
  async sendUrgentAlert(
    message: string
  ): Promise<void> {
    await this.radioDevice.transmit(
      message,
      { frequency: AlertServiceRadio.ALERT_FREQUENCY }
    );
  }
}
