// Contexto REFUGIO DESTINO. Reacciona por su cuenta.
busEventos.on("EvacuacionIniciada", async (evento) => {
  for (const id of evento.supervivientesIds) {
    await manejadorReservarPlaza.ejecutar({
      refugioId: evento.refugioDestinoId,
      supervivienteId: id
    });
    // Al guardarse, el Agregado publica PlazaReservada.
  }
});

// Contexto REFUGIO ORIGEN. Ni sabe quién reservó ni por qué.
busEventos.on("PlazaReservada", async (evento) => {
  await manejadorRetirarSuperviviente.ejecutar({
    refugioId: evento.refugioOrigenId,
    supervivienteId: evento.supervivienteId
  });
  // Publica SupervivienteRetirado.
});

// Contexto REFUGIO DESTINO otra vez.
busEventos.on("SupervivienteRetirado", async (evento) => {
  await manejadorAdmitirSuperviviente.ejecutar({
    refugioId: evento.refugioDestinoId,
    supervivienteId: evento.supervivienteId
  });
});
