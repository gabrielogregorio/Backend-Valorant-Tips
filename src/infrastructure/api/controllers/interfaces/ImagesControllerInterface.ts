import { Request, Response } from 'express';

export interface ImagesControllerInterface {
  create: (req: Request, res: Response) => Promise<Response>;
}
