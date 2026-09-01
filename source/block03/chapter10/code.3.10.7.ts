// infraestructura/servicio-copia-ficheros-rsync.ts
// Adaptador: conoce la infraestructura y decide cómo copiar.
class ServicioCopiaFicherosRsync
  implements ServicioCopiaFicheros {

  async copiar(
    origen: RutaFichero,
    destino: RutaFichero
  ): Promise<void> {
    if (this.conexionInestable()) {
      // rsync permite reanudar la copia si la conexión se cae.
      await this.rsync.sync(
        origen.ruta,
        destino.ruta
      );
    } else {
      await this.copiaDirecta(origen, destino);
    }
  }
}
