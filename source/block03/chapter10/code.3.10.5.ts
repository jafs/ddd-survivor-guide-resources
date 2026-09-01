// infraestructura/http/controlador-refugio.ts
async trasladarSuperviviente(req: Request, res: Response) {
  const comando: ComandoTrasladarSuperviviente = {
    refugioOrigenId: req.body.refugioOrigenId,
    refugioDestinoId: req.body.refugioDestinoId,
    supervivienteId: req.body.supervivienteId,
  };

  try {
    await this.manejador.handle(comando);
    res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof RefugioLlenoError) {
      res.status(409).json({ error: error.message });
    } else if (error instanceof SupervivienteInfectadoError) {
      res.status(422).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno" });
    }
  }
}
