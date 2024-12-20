import { Request, Response } from 'express';

export interface PostTagsControllerInterface {
  create: (req: Request, res: Response) => Promise<Response>;
  getAll: (_req: Request, res: Response) => Promise<Response>;
}
