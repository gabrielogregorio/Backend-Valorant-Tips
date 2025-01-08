import { Request, Response } from 'express';

export type IDashboardServiceType = {
  value: number;
  key: string;
};

export interface DashboardControllerInterface {
  get: (req: Request, res: Response<IDashboardServiceType[]>) => Promise<Response>;
}
