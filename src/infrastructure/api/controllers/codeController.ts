import { Request, Response } from 'express';
import { CodeControllerInterface } from './interfaces/CodeControllerInterface';
import { CreateCodeUseCaseInterface } from '@/application/contexts/code/useCases/create/CreateCodeUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaCode } from '@/infrastructure/api/schemas/code.schema';

export class CodeController implements CodeControllerInterface {
  constructor(private createCodeUseCase: CreateCodeUseCaseInterface) {}

  generate = async (req: Request, res: Response) => {
    useValidation(req, schemaCode);

    const token = await this.createCodeUseCase.execute();

    return res.json({ token: token.code });
  };
}
