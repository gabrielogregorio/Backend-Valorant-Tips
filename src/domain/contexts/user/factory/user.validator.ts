import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { UserZodValidator } from '@/infrastructure/contexts/user/validator';

export class UserValidatorFactory {
  static create(): ValidatorInterface<UserEntity> {
    return new UserZodValidator();
  }
}
