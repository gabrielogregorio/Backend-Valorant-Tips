import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class PostTagsZodValidator implements ValidatorInterface<PostTagsValueObject> {
  private _schema = z.object({
    id: z.string(),
    name: z.string(),
    categoryId: z.string(),
  });

  public validate(entity: PostTagsValueObject): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
      name: entity.name,
      categoryId: entity.categoryId.getValue(),
    });

    if (!result?.error) {
      return;
    }



    throw new ValidationError(
      result.error.errors.map((item) => ({
        location: item.path[0].toString(),
        message: item.message,
        path: item.path.reduce((prev, current) => (prev ? `${prev}.${current}` : String(current)), '').toString(),
        type: item.code,
      })),
    );
  }
}
