import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostZodValidator } from '@/infrastructure/contexts/post/validator';

export class PostValidatorFactory {
  static create(): ValidatorInterface<PostEntity> {
    return new PostZodValidator();
  }
}
