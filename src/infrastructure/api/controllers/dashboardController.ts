import { Request, Response } from 'express';
import { DashboardUseCaseInterface } from '@/application/contexts/dashboard/useCases/get/DashboardUseCaseInterface';
import { DashboardControllerInterface, IDashboardServiceType } from './interfaces/DashboardControllerInterface';

export class DashboardController implements DashboardControllerInterface {
  constructor(private DashboardUseCase: DashboardUseCaseInterface) {}

  get = async (_req: Request, res: Response<IDashboardServiceType>) => {
    const data = await this.DashboardUseCase.execute();

    return res.json({
      countAlAgents: data.countAlAgents,
      countAll: data.countAll,
      countAllPosts: data.countAllPosts,
      countAllSuggestions: data.countAllSuggestions,
      countAllUsers: data.countAllUsers,
      countAlMaps: data.countAlMaps,
      countIps: data.countIps,
    });
  };
}
