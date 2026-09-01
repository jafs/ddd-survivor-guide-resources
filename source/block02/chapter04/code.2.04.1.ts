// Entidad - Tiene identidad propia a través del identificador
class Superviviente {
  private constructor(
    private readonly _id: string,
    private _nombre: string,
    private _salud: number,
    private _habilidades: string[] = []
  ) {
    if (!_id) throw new Error("El identificador no puede estar vacío.");
    if (!_nombre) throw new Error("El nombre no puede estar vacío.");
    if (_salud < 0 || _salud > 100)
      throw new Error("La salud debe estar entre 0 y 100.");
  }

  // Registrar un superviviente nuevo. Si llega herido, se indica su salud.
  public static registrar(
    id: string,
    nombre: string,
    salud: number = 100
  ): Superviviente {
    return new Superviviente(id, nombre, salud);
  }

  public get id(): string { return this._id; }
  public get nombre(): string { return this._nombre; }
  public get salud(): number { return this._salud; }
  // Se devuelve una copia para que nadie pueda mutar el array desde fuera.
  public get habilidades(): string[] { return [...this._habilidades]; }

  // No puede haber una salud negativa. El mínimo es 0.
  public sufrirHerida(puntos: number): void {
    this._salud = Math.max(0, this._salud - puntos);
  }

  // No se pueden tener más de 100 puntos de salud.
  public curar(puntos: number): void {
    this._salud = Math.min(100, this._salud + puntos);
  }

  // Las habilidades aprendidas no se repiten y no se olvidan.
  public aprenderHabilidad(habilidad: string): void {
    if (this._habilidades.includes(habilidad)) {
      return;
    }
    this._habilidades.push(habilidad);
  }

  // Dos personas con el mismo nombre de pila y la misma salud siguen 
  // siendo personas distintas.
  public equals(otro: Superviviente): boolean {
    return this._id === otro._id;
  }
}

// Elsa Ruiz llega al refugio con una herida leve
const elsaRuiz = Superviviente.registrar("elsa-ruiz", "Elsa", 90);
elsaRuiz.sufrirHerida(10);               // salud: 80 → sigue siendo Elsa
elsaRuiz.curar(15);                      // salud: 95 → sigue siendo Elsa
elsaRuiz.aprenderHabilidad("sigilo");    // habilidades: ["sigilo"]
elsaRuiz.aprenderHabilidad("sigilo");    // ya la tiene, no se duplica

// Elsa Fernández llega tras días escondida en distintos refugios
const elsaFernandez = Superviviente.registrar("elsa-fernandez", "Elsa", 95);
elsaFernandez.aprenderHabilidad("sigilo");

// Aunque tengan el mismo nombre de pila, la misma salud y las mismas
// habilidades, NO son la misma persona
console.log(elsaRuiz.equals(elsaFernandez));
// false → diferente identificador
