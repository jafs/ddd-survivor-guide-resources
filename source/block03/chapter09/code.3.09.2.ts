// Lo que todo Evento comparte: identidad y momento.
interface EventoRefugio {
  tipo: string;
  idEvento: string;
  momento: string;
}

interface ZombieDetectado extends EventoRefugio {
  tipo: "ZombieDetectado";
  refugioId: string;
  sector: string;
}

interface SupervivienteAdmitido extends EventoRefugio {
  tipo: "SupervivienteAdmitido";
  refugioId: string;
  supervivienteId: string;
}

interface PerimetroVulnerado extends EventoRefugio {
  tipo: "PerimetroVulnerado";
  refugioId: string;
  sector: string;
  numHostiles: number;
}

interface CuarentenaActivada extends EventoRefugio {
  tipo: "CuarentenaActivada";
  refugioId: string;
  motivo: string;
  afectadosCount: number;
}

interface SupervivienteDadoDeBaja extends EventoRefugio {
  tipo: "SupervivienteDadoDeBaja";
  refugioId: string;
  supervivienteId: string;
}

// EventoDominio es la unión de todos los eventos posibles.
type EventoDominio =
  | ZombieDetectado
  | SupervivienteAdmitido
  | PerimetroVulnerado
  | CuarentenaActivada
  | SupervivienteDadoDeBaja;
