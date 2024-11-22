import { Request, Response } from 'express';
export interface UserControllerInterface {
  uploadImage: (req: Request, res: Response) => Promise<Response>;
  createUser: (req: Request, res: Response) => Promise<Response>;
  updateUser: (req: Request, res: Response) => Promise<Response>;
  get: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
