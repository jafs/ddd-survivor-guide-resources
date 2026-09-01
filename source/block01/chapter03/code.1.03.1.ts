// Modelo de Logística (upstream)
interface RegistroLogistica {
  id: string;
  nombre: string;
  unidades: number;
  lote: string;
  fechaCaducidad: string;
  proveedor: string;
}

// Modelo de Sanidad (downstream)
interface Suministro {
  id: string;
  nombre: string;
  dosis: number;
  caducidad: Date;
}

// Asistente en la puerta: convierte el lenguaje de Logística
// al que Sanidad entiende. El interior no sabe nada de fuera.
function traducirSuministro(
  registro: RegistroLogistica
): Suministro {
  return {
    id: registro.id,
    nombre: registro.nombre,
    dosis: registro.unidades,
    caducidad: new Date(registro.fechaCaducidad),
  };
}
