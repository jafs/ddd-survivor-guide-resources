busEventos.on(
  "SupervivienteAdmitido",
  async (evento) => {
    // Comprobamos antes de actuar.
    const programado = await repositorioMedico.hayChequeoProgramadoPara(
      evento.supervivienteId
    );

    if (programado) return; // Ya estaba programado.

    await manejadorProgramarChequeo.handle(evento.supervivienteId);
  }
);
