import { CreateUserBodyType } from '@/infrastructure/api/schemas/createUser.schema';
import { Request, Response } from 'express';
export interface UserControllerInterface {
  uploadImage: (req: Request, res: Response) => Promise<Response>;
  createUser: (req: Request<undefined, undefined, CreateUserBodyType>, res: Response) => Promise<Response>;
  updateUser: (req: Request, res: Response) => Promise<Response>;
  get: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
