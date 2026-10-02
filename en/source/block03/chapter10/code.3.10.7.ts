// infrastructure/file-copy-service-rsync.ts
// Adapter: knows the infrastructure and decides how to copy.
class FileCopyServiceRsync
  implements FileCopyService {

  async copy(
    source: FilePath,
    destination: FilePath
  ): Promise<void> {
    if (this.connectionUnstable()) {
      // rsync can resume the copy if the connection drops.
      await this.rsync.sync(
        source.path,
        destination.path
      );
    } else {
      await this.directCopy(source, destination);
    }
  }
}
