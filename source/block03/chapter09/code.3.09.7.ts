// Llamada al caso de uso de Logística que reacciona a admisiones
busEventos.on("SupervivienteAdmitido", (evento) => {
  manejadorActualizarConsumo.handle(
    evento.refugioId
  );
});

// Llamada al caso de uso de Sanidad que reacciona a admisiones
busEventos.on("SupervivienteAdmitido", (evento) => {
  manejadorProgramarChequeo.handle(
    evento.supervivienteId
  );
});

// Llamada al caso de uso de Comando que reacciona a brechas en el perímetro
busEventos.on("PerimetroVulnerado", (evento) => {
  manejadorEvaluarEvacuacion.handle(
    evento.refugioId
  );
});

// Llamada al caso de uso de Sanidad que emite alertas ante cuarentenas
busEventos.on("CuarentenaActivada", (evento) => {
  manejadorEnviarAlerta.handle(
    `Cuarentena en ${evento.refugioId}: ` +
    `${evento.motivo}`
  );
});
