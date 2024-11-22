import { Request, Response } from 'express';
import { AuthControllerInterface } from './interfaces/AuthControllerInterface';
import { LoginUseCaseInterface } from '@/application/contexts/auth/useCases/login/LoginUseCaseInterface';
import { schemaAuth } from '@/infrastructure/api/schemas/makeAuth.schema';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';

export class AuthController implements AuthControllerInterface {
  constructor(private loginUseCase: LoginUseCaseInterface) {}

  auth = async (req: Request, res: Response) => {
    const content = useValidation(req, schemaAuth);

    const { username, password } = content.body;

    const response = await this.loginUseCase.execute({ username, password });

    return res.json(response);
  };
}
