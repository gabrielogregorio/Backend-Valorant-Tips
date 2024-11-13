import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';
import { ViewsZodValidator } from '@/infrastructure/contexts/views/validator';

export class ViewsValidatorFactory {
  static create(): ValidatorInterface<ViewsEntity> {
    return new ViewsZodValidator();
  }
}
