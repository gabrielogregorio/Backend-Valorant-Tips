import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostTagCategoryValueObject } from '@/domain/contexts/contexts/postTagCategory/valueObject';
import { PostTagCategoryZodValidator } from '@/infrastructure/contexts/postTagCategory/validator';

export class PostTagCategoryValidatorFactory {
  static create(): ValidatorInterface<PostTagCategoryValueObject> {
    return new PostTagCategoryZodValidator();
  }
}
