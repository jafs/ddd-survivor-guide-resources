// MAL: Modelo anémico.
class Refugio {
  public id: string;
  public capacidad: number;
  public contadorActual: number;
  public supervivientes: Superviviente[] = [];

  public obtenerSupervivientes() {
    return this.supervivientes;
  }
  public establecerSupervivientes(
    s: Superviviente[]
  ) {
    this.supervivientes = s;
  }
  public obtenerContadorActual() {
    return this.contadorActual;
  }
  public establecerContadorActual(n: number) {
    this.contadorActual = n;
  }
}

// Toda la lógica vive en un servicio aparte.
class ServicioRefugio {
  admitirSuperviviente(
    refugio: Refugio,
    superviviente: Superviviente
  ) {
    if (
      refugio.obtenerContadorActual() + 1 >
      refugio.capacidad
    ) {
      throw new Error("Refugio lleno");
    }
    refugio.obtenerSupervivientes().push(
      superviviente
    );
    refugio.establecerContadorActual(
      refugio.obtenerContadorActual() + 1
    );
  }
}
