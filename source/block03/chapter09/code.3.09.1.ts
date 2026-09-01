// MAL: El refugio conoce demasiados detalles.
public admitir(superviviente: Superviviente): void {
  this.supervivientes.push(superviviente);

  this.servicioLogistica.actualizarConsumoAlimentos(this.id);
  this.servicioMedico.programarChequeo(superviviente.id);
  this.servicioComando.actualizarMapa(this.id, this.contadorActual);
}
