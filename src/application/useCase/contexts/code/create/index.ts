import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';
import {
  CreateCodeOutputDto,
  CreateCodeUseCaseInterface,
} from '@/useCase/contexts/code/create/CreateCodeUseCaseInterface';

export class CreateCodeUseCase implements CreateCodeUseCaseInterface {
  constructor(private codeRepository: CodeRepositoryInterface) {}

  execute = async (): Promise<CreateCodeOutputDto> => {
    const code = CodeEntity.create();

    const codeCreated = await this.codeRepository.save(code);

    return {
      available: codeCreated.available,
      code: codeCreated.code.getValue(),
      id: codeCreated.id.getValue(),
    };
  };
}
