import { HandleUploadFileInterface } from '@/application/services/HandleAuthToken copy';
import sharp from 'sharp';
import fsNode from 'fs';
import path from 'path';

export class HandleUploadFile implements HandleUploadFileInterface {
  async upload({
    buffer,
    originalName,
  }: {
    buffer: Buffer;
    originalName: string;
  }): Promise<{ format: string; height: number; sizeInBytes: number; urlUploaded: string; width: number }> {
    const outputFileName = `/media/post-${Date.now()}.webp`;
    const outputPath = path.join('./public', outputFileName);

    const processedImage = await sharp(buffer)
      .resize({
        width: 2000,
        withoutEnlargement: true,
      })
      .toFormat('webp', { quality: 60 })
      .toBuffer({ resolveWithObject: true });

    const metadata = processedImage.info;

    fsNode.writeFileSync(outputPath, processedImage.data);

    const pathSeparated = originalName.split('.');

    return {
      format: pathSeparated[pathSeparated.length - 1],
      height: metadata.height,
      urlUploaded: outputFileName,
      width: metadata.width,
      sizeInBytes: processedImage.info.size,
    };
  }
}
