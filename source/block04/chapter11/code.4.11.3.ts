busEventos.on("EvacuacionIniciada", (evento) =>
  saga.onEvacuacionIniciada(evento)
);
busEventos.on("PlazaReservada", (evento) =>
  saga.onPlazaReservada(evento)
);
busEventos.on("PlazaNoDisponible", () =>
  saga.onPlazaNoDisponible()
);
// Y así con el resto de Eventos del proceso.
