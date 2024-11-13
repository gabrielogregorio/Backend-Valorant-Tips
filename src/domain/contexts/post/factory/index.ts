import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostYupValidator } from '@/infrastructure/contexts/post/validator/post.yup';

export class PostValidatorFactory {
  static create(): ValidatorInterface<PostEntity> {
    return new PostYupValidator();
  }
}
