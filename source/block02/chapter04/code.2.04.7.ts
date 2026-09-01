// MAL: mutar el objeto directamente. Ya protegimos la latitud, haciéndola
// privada y sólo haciéndola accesible con un getter, por lo que lo siguiente
// dará error de transpilación.
punto1.latitud = 41.3851; 

// BIEN: crear un objeto nuevo con los valores actualizados
const puntoActualizado = Coordenadas.crear(41.3851, punto1.longitud);
