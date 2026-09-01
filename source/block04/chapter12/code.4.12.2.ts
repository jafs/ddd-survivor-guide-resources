// MAL: Un solo agregado para gobernarlos a todos cual Anillo Único.
class CentroDeMando {
  private torretas: Torreta[];
  private turnosDeGuardia: TurnoDeGuardia[];
  private supervivientes: Superviviente[];
  private suministros: Suministro[];
  private registrosMedicos: RegistroMedico[];
  private generadores: Generador[];
  private datosMeteorologicos: DatosMeteoro[];
  private amenazasCercanas: Zombie[];
  private alianzas: Alianza[];
  private eventosHistoricos: Evento[];
  // ... y 21 colecciones más.

  public activarTorretas(): void {
    this.torretas.forEach(t => t.activar());
  }
}
