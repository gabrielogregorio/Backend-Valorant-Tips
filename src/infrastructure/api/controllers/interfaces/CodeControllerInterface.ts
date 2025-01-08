import { Request, Response } from 'express';

export interface CodeControllerInterface {
  generate: (_req: Request, res: Response) => Promise<Response>;
}
