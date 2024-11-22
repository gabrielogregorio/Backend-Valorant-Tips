import { Request, Response } from 'express';

export interface AuthControllerInterface {
  auth: (req: Request, res: Response) => Promise<Response>;
}
