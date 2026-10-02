// Each movement is an immutable fact.
type StoreroomEvent =
  | { type: "BandagesRecovered"; quantity: number }
  | { type: "BandagesUsed"; quantity: number }
  | { type: "BandagesSent"; quantity: number };

// The storeroom's complete ledger.
const ledger: StoreroomEvent[] = [
  { type: "BandagesRecovered", quantity: 50 },
  { type: "BandagesUsed", quantity: 10 },
  { type: "BandagesSent", quantity: 25 },
  { type: "BandagesRecovered", quantity: 30 },
];

// Rebuilding the state = walking through the facts.
function availableBandages(
  events: StoreroomEvent[]
): number {
  return events.reduce((total, event) => {
    if (event.type === "BandagesRecovered") {
      return total + event.quantity;
    }
    return total - event.quantity;
  }, 0);
}

// Current state: 50 - 10 - 25 + 30 = 45.
availableBandages(ledger);

// State as of the third movement:
// 50 - 10 - 25 = 15.
availableBandages(ledger.slice(0, 3));
