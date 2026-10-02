// Open Host Service: explicit, versioned public contract.
// Consumers depend on this interface, not on the internal model.
interface LogisticsProtocolJanuaryEdition {
  checkStock(data: {
    category: "medicine" | "food" | "tools";
  }): Promise<{ quantity: number; nextExpiration: string | null }>;

  checkWaterTank(): Promise<{
    liters: number;
    estimatedDays: number;
  }>;
}
