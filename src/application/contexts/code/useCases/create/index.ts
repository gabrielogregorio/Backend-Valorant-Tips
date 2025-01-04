import {
  CreateCodeOutputDtoInterface,
  CreateCodeUseCaseInterface,
} from '@/application/contexts/code/useCases/create/CreateCodeUseCaseInterface';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';

export class CreateCodeUseCase implements CreateCodeUseCaseInterface {
  constructor(private _codeRepository: CodeRepositoryInterface) {}

  execute = async (): Promise<CreateCodeOutputDtoInterface> => {
    const code = CodeEntity.create();

    const codeCreated = await this._codeRepository.save(code);

    return {
      available: codeCreated.available,
      code: codeCreated.code.getValue(),
      id: codeCreated.id.getValue(),
    };
  };
}
