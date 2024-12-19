import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { MapsZodValidator } from '@/infrastructure/contexts/maps/validator';

export class MapsValidatorFactory {
  static create(): ValidatorInterface<MapsValueObject> {
    return new MapsZodValidator();
  }
}
