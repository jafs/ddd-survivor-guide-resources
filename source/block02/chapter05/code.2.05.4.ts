interface RegistroEventos {
  anotar(mensaje: string): void;
}

class FabricaRefugio {
  constructor(private readonly registro: RegistroEventos) {}

  fundar(
    nombre: string,
    coordenadas: Coordenadas,
    capacidad: number
  ): Refugio {
    const refugio = Refugio.fundar(nombre, coordenadas, capacidad);
    this.registro.anotar(
      `Refugio "${nombre}" fundado con capacidad ${capacidad}`
    );
    return refugio;
  }

  // Escenario especial: refugio de emergencia con capacidad fija.
  improvisarEnZona(zona: string, coordenadas: Coordenadas): Refugio {
    const refugio = Refugio.fundar(`Emergencia-${zona}`, coordenadas, 10);
    this.registro.anotar(
      `Refugio improvisado en zona ${zona}`
    );
    return refugio;
  }
}
