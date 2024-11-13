import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { CodeZodValidator } from '@/infrastructure/contexts/code/validator';

export class CodeValidatorFactory {
  static create(): ValidatorInterface<CodeEntity> {
    return new CodeZodValidator();
  }
}
