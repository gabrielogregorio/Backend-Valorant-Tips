import { Request, Response } from 'express';
import { CreateCodeUseCaseInterface } from '@/application/contexts/code/useCases/create/CreateCodeUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaCode } from '@/infrastructure/api/schemas/code.schema';
import { CodeControllerInterface } from './interfaces/CodeControllerInterface';

export class CodeController implements CodeControllerInterface {
  constructor(private _createCodeUseCase: CreateCodeUseCaseInterface) {}

  generate = async (req: Request, res: Response) => {
    useValidation(req, schemaCode);

    const token = await this._createCodeUseCase.execute();

    return res.json({ token: token.code });
  };
}
