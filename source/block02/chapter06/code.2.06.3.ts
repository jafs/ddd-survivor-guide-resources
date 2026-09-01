class ServicioTraslado {
  // Los agregados llegan con sus datos: este servicio no accede a
  // fuentes externas.
  public trasladar(
    superviviente: Superviviente,
    refugioOrigen: Refugio,
    refugioDestino: Refugio
  ): void {
    // Un infectado no sale de la cuarentena. Ni con orden de Nora.
    if (superviviente.estaInfectado()) {
      throw new Error(
        "No se puede trasladar a un superviviente infectado."
      );
    }

    // No enviamos gente a un refugio lleno. Recuerda que Murphy no
    // negocia cuando se trata de supervivencia.
    if (!refugioDestino.tieneCapacidad()) {
      throw new Error(
        `El refugio ${refugioDestino.id} no tiene capacidad.`
      );
    }

    // Si Rocío se va y no queda nadie con conocimientos médicos, el
    // refugio origen queda expuesto.
    if (superviviente.esEspecialista() &&
      refugioOrigen.quedariaInseguroSin(superviviente)) {
      throw new Error(
        `${superviviente.nombre} es especialista: ` +
        `su marcha dejaría el refugio en situación crítica.`
      );
    }

    // Aplicar el traslado en los dos agregados.
    refugioOrigen.retirarSuperviviente(superviviente.id);
    refugioDestino.admitir(superviviente);
  }
}
