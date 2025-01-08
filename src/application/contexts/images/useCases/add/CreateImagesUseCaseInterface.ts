export interface CreateImagesUseCaseInterface {
  execute: (
    originalName: string,
    buffer: Buffer,
  ) => Promise<{
    format: string;
    url: string;
    width: number;
    height: number;
    sizeInBytes: number;
  }>;
}
