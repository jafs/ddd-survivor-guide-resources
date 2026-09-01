// Evento de dominio (privado, dentro del contexto).
type PerimetroVulnerado = {
  tipo: "PerimetroVulnerado";
  refugioId: string;
  sector: string;
  numHostiles: number;
  // Tipo del dominio interno, desconocido fuera.
  estadoSector: EstadoSector;
  momento: string;
};

// Evento de integración (público, cruza contextos).
type PerimetroVulneradoIntegracion = {
  tipo: "PerimetroVulnerado";
  refugioId: string;
  numHostiles: number;
  momento: string;
};
