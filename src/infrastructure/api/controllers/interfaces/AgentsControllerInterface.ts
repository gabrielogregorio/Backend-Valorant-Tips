import { Request, Response } from 'express';

export interface AgentsControllerInterface {
  create: (req: Request, res: Response) => Promise<Response>;
  getAll: (_req: Request, res: Response) => Promise<Response>;
}
