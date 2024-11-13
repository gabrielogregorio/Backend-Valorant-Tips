import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { CodeYupValidator } from '@/infrastructure/contexts/code/validator/yup';

export class CodeValidatorFactory {
  static create(): ValidatorInterface<CodeEntity> {
    return new CodeYupValidator();
  }
}
