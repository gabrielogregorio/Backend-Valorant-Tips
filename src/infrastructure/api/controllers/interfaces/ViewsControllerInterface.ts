import { Request, Response } from 'express';

export interface ViewsControllerInterface {
  create: (req: Request, res: Response) => Promise<Response>;
  get: (_req: Request, res: Response) => Promise<Response>;
}
