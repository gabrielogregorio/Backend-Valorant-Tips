import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { PostTagsZodValidator } from '@/infrastructure/contexts/postTags/validator';

export class PostTagsValidatorFactory {
  static create(): ValidatorInterface<PostTagsValueObject> {
    return new PostTagsZodValidator();
  }
}
