// "Superviviente Monstruo" que lo sabe todo y que hay que evitar.
interface Superviviente {
  id: string;
  nombre: string;
  salud: number;        // Sanidad
  vacunas: string[];    // Sanidad
  pesoMaximo: number;   // Logística
  ubicacion: Coordenada;// Logística
  rango: string;        // Comando
}

// Es mejor disponer de modelos específicos por contexto.
// En el contexto de sanidad:
interface SupervivienteSanidad {
  id: string;
  nivelInfeccion: number;
  historial: NotaMedica[];
}

// ...Y en el de logística:
interface SupervivienteLogistica {
  id: string;
  capacidadCarga: number;
  estaDisponible: boolean;
}
