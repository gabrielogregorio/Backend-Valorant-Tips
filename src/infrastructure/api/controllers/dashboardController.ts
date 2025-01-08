import { Request, Response } from 'express';
import { DashboardUseCaseInterface } from '@/application/contexts/dashboard/useCases/get/DashboardUseCaseInterface';
import { DashboardControllerInterface, IDashboardServiceType } from './interfaces/DashboardControllerInterface';

export class DashboardController implements DashboardControllerInterface {
  constructor(private _dashboardUseCase: DashboardUseCaseInterface) {}

  get = async (_req: Request, res: Response<IDashboardServiceType[]>) => {
    const data = await this._dashboardUseCase.execute();

    return res.json([
      {
        value: data.countAlAgents,
        key: 'countAlAgents',
      },
      {
        value: data.countAll,
        key: 'countAllAccess',
      },
      {
        value: data.countAllPosts,
        key: 'countAllPosts',
      },
      {
        value: data.countAllSuggestions,
        key: 'countAllSuggestions',
      },

      {
        value: data.countAllUsers,
        key: 'countAllUsers',
      },

      {
        value: data.countAlMaps,
        key: 'countAlMaps',
      },

      {
        value: data.countIps,
        key: 'countIps',
      },
    ]);
  };
}
