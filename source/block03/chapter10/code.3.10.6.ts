// dominio/servicio-copia-ficheros.ts
// Puerto: el dominio define la operación,
// no su implementación.
interface ServicioCopiaFicheros {
  copiar(
    origen: RutaFichero,
    destino: RutaFichero
  ): Promise<void>;
}
