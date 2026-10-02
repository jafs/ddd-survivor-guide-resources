// domain/file-copy-service.ts
// Port: the domain defines the operation,
// not its implementation.
interface FileCopyService {
  copy(
    source: FilePath,
    destination: FilePath
  ): Promise<void>;
}
