import { Request, Response } from 'express';

export interface AuthControllerInterface {
  auth: (
    req: Request<never, never, { username: string; password: string }>,
    res: Response<{
      token: string;
      userId: string;
    }>,
  ) => Promise<Response>;
}
