import { Request, Response } from 'express';
import { CodeControllerInterface } from './interfaces/CodeControllerInterface';
import { CreateCodeUseCaseInterface } from '@/useCase/contexts/code/create/CreateCodeUseCaseInterface';

export class CodeController implements CodeControllerInterface {
  constructor(private createCodeUseCase: CreateCodeUseCaseInterface) {}

  generate = async (_req: Request, res: Response<{ token: string }>) => {
    const token = await this.createCodeUseCase.execute();

    return res.json({ token: token.code });
  };
}
