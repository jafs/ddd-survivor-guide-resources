public admitir(s: Superviviente): void {
  if (this.supervivientes.length + 1 > this._capacidad) {
    throw new Error(
      "Refugio lleno: no podemos admitir más supervivientes"
    );
  }
  this.supervivientes.push(s);
  // Nada más: el dominio aplica reglas y cambia estado.
}
