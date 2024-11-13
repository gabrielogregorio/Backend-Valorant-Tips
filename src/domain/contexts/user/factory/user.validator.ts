import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { UserYupValidator } from '@/infrastructure/contexts/user/validator/user.yup';

export class UserValidatorFactory {
  static create(): ValidatorInterface<UserEntity> {
    return new UserYupValidator();
  }
}
