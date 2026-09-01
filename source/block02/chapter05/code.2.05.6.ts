class Superviviente {
  private habilidades: Habilidad[] = [];
  private static readonly MAX_HABILIDADES = 3;

  // Constructor privado y factory method: ver capítulo 4.

  public aprenderHabilidad(habilidad: Habilidad): void {
    if (this.habilidades.length >= Superviviente.MAX_HABILIDADES) {
      throw new Error(
        "Un superviviente solo puede dominar tres habilidades"
      );
    }
    if (this.habilidades.includes(habilidad)) {
      throw new Error(
        `Ya dominas la habilidad "${habilidad}"`
      );
    }
    this.habilidades.push(habilidad);
  }

  public obtenerHabilidades(): Habilidad[] {
    return [...this.habilidades];
  }
}
