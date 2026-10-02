// The projection's write interface.
// It lives on the read side and doesn't touch the Domain.
interface ShelterStatusProjection {
  incrementSurvivors(shelterId: string): Promise<void>;
  decrementSurvivors(shelterId: string): Promise<void>;
}
