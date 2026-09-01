// El lado de lectura escucha al de escritura.
// Cada Evento mueve el contador en una dirección.
busEventos.on("SupervivienteAdmitido", async (evento) => {
  await proyeccionEstado.incrementarSupervivientes(evento.refugioId);
});

// Y resta cuando alguien sale o cae.
busEventos.on("SupervivienteDadoDeBaja", async (evento) => {
  await proyeccionEstado.decrementarSupervivientes(evento.refugioId);
});
