// Logistics model (upstream).
interface LogisticsRecord {
  id: string;
  name: string;
  units: number;
  batch: string;
  expirationDate: string;
  supplier: string;
}

// Medical model (downstream).
interface Supply {
  id: string;
  name: string;
  doses: number;
  expiration: Date;
}

// Assistant at the door: converts the language of Logistics
// into the one Medical understands. The inside knows nothing of the outside.
function translateSupply(
  record: LogisticsRecord
): Supply {
  return {
    id: record.id,
    name: record.name,
    doses: record.units,
    expiration: new Date(record.expirationDate),
  };
}
