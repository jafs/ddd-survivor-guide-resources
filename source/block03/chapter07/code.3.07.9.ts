// Modelo de lectura: plano, sin reglas ni dominio.
// Solo los datos que la consulta necesita devolver.
type EstadoRefugio = {
  refugioId: string;
  numSupervivientes: number;
};

// Interfaz de solo lectura. No es un Repositorio.
interface BuscadorEstadoRefugio {
  obtenerEstado(refugioId: string): Promise<EstadoRefugio>;
}
