// Open Host Service: contrato público explícito y versionado.
// Los consumidores dependen de esta interfaz, no del modelo interno.
interface ProtocoloLogisticaEdicionEnero {
  consultarStock(datos: {
    categoria: "medicamentos" | "alimentos" | "herramientas";
  }): Promise<{ cantidad: number; proximaCaducidad: string | null }>;

  consultarDepositoAgua(): Promise<{
    litros: number;
    diasEstimados: number;
  }>;
}
