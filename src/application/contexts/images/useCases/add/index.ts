import { HandleUploadFileInterface } from '@/application/services/HandleAuthToken copy';
import { CreateImagesUseCaseInterface } from './CreateImagesUseCaseInterface';

export class CreateImagesUseCase implements CreateImagesUseCaseInterface {
  constructor(private _handleUploadFile: HandleUploadFileInterface) {}

  execute = async (originalName: string, buffer: Buffer) => {
    const fileUploaded = await this._handleUploadFile.upload({
      buffer,
      originalName,
    });

    return {
      format: fileUploaded.format,
      url: fileUploaded.urlUploaded,
      width: fileUploaded.width,
      height: fileUploaded.height,
      sizeInBytes: fileUploaded.sizeInBytes,
    };
  };
}
