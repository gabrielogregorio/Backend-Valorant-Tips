/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Request, Response } from 'express';
import { CreateViewUseCaseInterface } from '@/application/contexts/views/useCases/add/CreateViewUseCaseInterface';
import { GetViewUseCaseInterface } from '@/application/contexts/views/useCases/get/GetViewUseCaseInterface';
import { errorStates } from '../errors/types';
import { ApiError } from '../errors/ApiError';
import { ViewsControllerInterface } from './interfaces/ViewsControllerInterface';

export class ViewsController implements ViewsControllerInterface {
  constructor(
    private _createViewUseCase: CreateViewUseCaseInterface,
    private _getViewUseCase: GetViewUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const ip = req.socket.remoteAddress?.split(`:`).pop();
    if (!ip) {
      throw new ApiError(errorStates.PAYLOAD_IS_INVALID);
    }
    await this._createViewUseCase.execute(ip);

    return res.sendStatus(204);
  };

  get = async (_req: Request, res: Response): Promise<Response> => {
    const { countAll, countIps } = await this._getViewUseCase.execute();

    return res.json({ countAll, countIps });
  };
}
