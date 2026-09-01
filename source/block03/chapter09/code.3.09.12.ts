// Cada movimiento es un hecho inmutable.
type EventoAlmacen =
  | { tipo: "VendasRecuperadas"; cantidad: number }
  | { tipo: "VendasUsadas"; cantidad: number }
  | { tipo: "VendasEnviadas"; cantidad: number };

// El registro completo del almacén.
const registro: EventoAlmacen[] = [
  { tipo: "VendasRecuperadas", cantidad: 50 },
  { tipo: "VendasUsadas", cantidad: 10 },
  { tipo: "VendasEnviadas", cantidad: 25 },
  { tipo: "VendasRecuperadas", cantidad: 30 },
];

// Reconstruir el estado = recorrer los hechos.
function vendasDisponibles(
  eventos: EventoAlmacen[]
): number {
  return eventos.reduce((total, evento) => {
    if (evento.tipo === "VendasRecuperadas") {
      return total + evento.cantidad;
    }
    return total - evento.cantidad;
  }, 0);
}

// Estado actual: 50 - 10 - 25 + 30 = 45.
vendasDisponibles(registro);

// Estado a fecha del tercer movimiento:
// 50 - 10 - 25 = 15.
vendasDisponibles(registro.slice(0, 3));
