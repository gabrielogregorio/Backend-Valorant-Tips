import { Request, Response } from 'express';

export interface PostTagCategoryControllerInterface {
  create: (req: Request, res: Response) => Promise<Response>;
  getAll: (_req: Request, res: Response) => Promise<Response>;
}
