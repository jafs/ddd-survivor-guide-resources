// Domain event (private, inside the context).
type PerimeterBreached = {
  type: "PerimeterBreached";
  shelterId: string;
  sector: string;
  hostileCount: number;
  // Internal domain type, unknown outside.
  sectorStatus: SectorStatus;
  occurredAt: string;
};

// Integration event (public, crosses contexts).
type PerimeterBreachedIntegration = {
  type: "PerimeterBreached";
  shelterId: string;
  hostileCount: number;
  occurredAt: string;
};
