import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';
import { ViewsYupValidator } from '@/infrastructure/contexts/views/validator/yup';

export class ViewsValidatorFactory {
  static create(): ValidatorInterface<ViewsEntity> {
    return new ViewsYupValidator();
  }
}
