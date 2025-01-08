import { Request, Response } from 'express';
import { LoginUseCaseInterface } from '@/application/contexts/auth/useCases/login/LoginUseCaseInterface';
import { schemaAuth } from '@/infrastructure/api/schemas/makeAuth.schema';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { AuthControllerInterface } from './interfaces/AuthControllerInterface';

export class AuthController implements AuthControllerInterface {
  constructor(private _loginUseCase: LoginUseCaseInterface) {}

  auth = async (req: Request, res: Response) => {
    const content = useValidation(req, schemaAuth);

    const { username, password } = content.body;

    const response = await this._loginUseCase.execute({ username, password });

    return res.json(response);
  };
}
