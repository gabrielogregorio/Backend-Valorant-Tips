/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Request, Response } from 'express';
import { ImagesControllerInterface } from '@/infrastructure/api/controllers/interfaces/ImagesControllerInterface';
import { CreateImagesUseCaseInterface } from '@/application/contexts/images/useCases/add/CreateImagesUseCaseInterface';

export class ImagesController implements ImagesControllerInterface {
  constructor(private _createImagesUseCase: CreateImagesUseCaseInterface) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    if (!req.file) {
      return res.status(400).send('Nenhum arquivo enviado.');
    }
    const { buffer, originalname } = req.file;

    const map = await this._createImagesUseCase.execute(originalname, buffer);

    return res.json({
      format: map.format,
      height: map.height,
      sizeInBytes: map.sizeInBytes,
      url: map.url,
      width: map.width,
    });
  };
}
