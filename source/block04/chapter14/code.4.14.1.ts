// Post-it naranja → tipo de evento de dominio
type SupervivienteAdmitido = {
  tipo: "SupervivienteAdmitido";
  idEvento: string;
  refugioId: string;
  supervivienteId: string;
  momento: string;
};

// Post-it azul → comando (solo primitivos)
class ComandoAdmitirSuperviviente {
  constructor(
    readonly refugioId: string,
    readonly supervivienteId: string,
    readonly nombre: string,
    readonly salud: number
  ) {}
}

// Post-it amarillo grande → agregado (extracto)
class Refugio {
  // ...
  public admitir(
    superviviente: Superviviente
  ): void {
    if (
      this.supervivientes.length + 1 >
      this.capacidad
    ) {
      throw new Error("Refugio lleno");
    }
    this.supervivientes.push(superviviente);
  }
}

// Post-it lila → listener / política
busEventos.on(
  "SupervivienteAdmitido",
  async (event) => {
    await servicioMedico.programarChequeo(
      event.supervivienteId
    );
  }
);
