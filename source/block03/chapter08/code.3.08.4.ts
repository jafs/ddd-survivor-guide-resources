// API REST: capa de presentación.
app.post(
  "/refugios/:id/admitir",
  async (req, res) => {
    const comando: ComandoAdmitirSuperviviente = {
      refugioId: req.params.id,
      supervivienteId: req.body.supervivienteId,
      nombre: req.body.nombre,
      salud: req.body.salud
    };

    await manejadorAdmitirSuperviviente.handle(comando);

    res.status(200).json({ message: "Superviviente admitido" });
  }
);
