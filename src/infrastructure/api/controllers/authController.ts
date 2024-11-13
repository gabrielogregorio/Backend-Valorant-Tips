import { Request, Response } from 'express';
import { AuthControllerInterface } from './interfaces/AuthControllerInterface';
import { LoginUseCaseInterface } from '@/useCase/contexts/auth/login/LoginUseCaseInterface';

export class AuthController implements AuthControllerInterface {
  constructor(private loginUseCase: LoginUseCaseInterface) {}

  auth = async (
    req: Request<never, never, { username: string; password: string }>,
    res: Response<{
      token: string;
      id: string;
    }>,
  ) => {
    const { username, password } = req.body;

    const response = await this.loginUseCase.execute({ username, password });

    return res.json(response);
  };
}
