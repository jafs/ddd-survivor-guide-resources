// What every Event shares: identity and moment.
interface ShelterEvent {
  type: string;
  eventId: string;
  occurredAt: string;
}

interface ZombieDetected extends ShelterEvent {
  type: "ZombieDetected";
  shelterId: string;
  sector: string;
}

interface SurvivorAdmitted extends ShelterEvent {
  type: "SurvivorAdmitted";
  shelterId: string;
  survivorId: string;
}

interface PerimeterBreached extends ShelterEvent {
  type: "PerimeterBreached";
  shelterId: string;
  sector: string;
  hostileCount: number;
}

interface QuarantineActivated extends ShelterEvent {
  type: "QuarantineActivated";
  shelterId: string;
  reason: string;
  affectedCount: number;
}

interface SurvivorDischarged extends ShelterEvent {
  type: "SurvivorDischarged";
  shelterId: string;
  survivorId: string;
}

// DomainEvent is the union of every possible event.
type DomainEvent =
  | ZombieDetected
  | SurvivorAdmitted
  | PerimeterBreached
  | QuarantineActivated
  | SurvivorDischarged;
