type Habilidad =
  | "primeros-auxilios"
  | "combate"
  | "mecanica"
  | "exploracion";

class Superviviente {
  private habilidades: Habilidad[] = [];

  // Constructor privado y factory method: ver capítulo 4.

  public aprenderHabilidad(habilidad: Habilidad): void {
    if (this.habilidades.includes(habilidad)) {
      return;
    }
    this.habilidades.push(habilidad);
  }

  public obtenerHabilidades(): Habilidad[] {
    return [...this.habilidades];
  }
}
