// Port for notifications.
interface AlertService {
  sendUrgentAlert(message: string): Promise<void>;
}
