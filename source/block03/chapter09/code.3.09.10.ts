// La interfaz de escritura de la proyección.
// Vive en el lado de lectura, no toca el Dominio.
interface ProyeccionEstadoRefugio {
  incrementarSupervivientes(refugioId: string): Promise<void>;
  decrementarSupervivientes(refugioId: string): Promise<void>;
}
