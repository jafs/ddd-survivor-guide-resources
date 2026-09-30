// The "Monster Survivor" that knows everything and must be avoided.
interface Survivor {
  id: string;
  name: string;
  health: number;       // Medical
  vaccines: string[];   // Medical
  maxWeight: number;    // Logistics
  location: Coordinates;// Logistics
  rank: string;         // Command
}

// It's better to have specific models per Context.
// In the Medical Context:
interface MedicalSurvivor {
  id: string;
  infectionLevel: number;
  history: MedicalNote[];
}

// ...And in the Logistics one:
interface LogisticsSurvivor {
  id: string;
  loadCapacity: number;
  isAvailable: boolean;
}
