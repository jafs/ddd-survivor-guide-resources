// Read model: flat, no rules, no domain.
// Only the data the query needs to return.
type ShelterStatus = {
  shelterId: string;
  survivorCount: number;
};

// Read-only interface. It is not a Repository.
interface ShelterStatusFinder {
  getStatus(shelterId: string): Promise<ShelterStatus>;
}
