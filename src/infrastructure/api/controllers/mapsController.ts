import { Request, Response } from 'express';
import { MapsControllerInterface } from '@/infrastructure/api/controllers/interfaces/MapsControllerInterface';
import { CreateMapUseCaseInterface } from '@/application/contexts/maps/useCases/add/CreateMapUseCaseInterface';
import { GetMapsUseCaseInterface } from '@/application/contexts/maps/useCases/get/GetMapsUseCaseInterface';

export class MapsController implements MapsControllerInterface {
  constructor(
    private _createMapUseCase: CreateMapUseCaseInterface,
    private _getMapsUseCase: GetMapsUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const map = await this._createMapUseCase.execute(req.body.name, req.body.image);

    return res.json({
      id: map.id,
      name: map.name,
      image: map.image,
    });
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const maps = await this._getMapsUseCase.execute();

    return res.json(
      maps.map((map) => ({
        id: map.id,
        name: map.name,
        image: map.image,
      })),
    );
  };
}
