import { Request, Response } from 'express';

export interface UserControllerInterface {
  createUser: (req: Request, res: Response) => Promise<Response>;
  updateUser: (req: Request, res: Response) => Promise<Response>;
  get: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
