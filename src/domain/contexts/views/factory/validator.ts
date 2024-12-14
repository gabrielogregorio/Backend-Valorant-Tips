import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { ViewsValueObject } from '@/domain/contexts/contexts/views/valueObject';
import { ViewsZodValidator } from '@/infrastructure/contexts/views/validator';

export class ViewsValidatorFactory {
  static create(): ValidatorInterface<ViewsValueObject> {
    return new ViewsZodValidator();
  }
}
