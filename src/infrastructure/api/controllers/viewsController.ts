import { Request, Response } from 'express';
import { errorStates } from '../errors/types';
import { ApiError } from '../errors/ApiError';
import { ViewsControllerInterface } from './interfaces/ViewsControllerInterface';
import { CreateViewUseCaseInterface } from '@/useCase/contexts/views/add/CreateViewUseCaseInterface';
import { GetViewUseCaseInterface } from '@/useCase/contexts/views/get/GetViewUseCaseInterface';

export class ViewsController implements ViewsControllerInterface {
  constructor(
    private createViewUseCase: CreateViewUseCaseInterface,
    private getViewUseCase: GetViewUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const ip = req.socket.remoteAddress?.split(`:`).pop();
    if (!ip) {
      throw new ApiError(errorStates.PAYLOAD_IS_INVALID, "ip don't found");
    }
    await this.createViewUseCase.execute(ip);

    return res.sendStatus(204);
  };

  get = async (_req: Request, res: Response): Promise<Response> => {
    const { countAll, countIps } = await this.getViewUseCase.execute();

    return res.json({ countAll, countIps });
  };
}
