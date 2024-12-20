import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostTagCategoryValueObject } from '@/domain/contexts/contexts/postTagCategory/valueObject';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class PostTagCategoryZodValidator implements ValidatorInterface<PostTagCategoryValueObject> {
  private _schema = z.object({
    id: z.string(),
    name: z.string(),
  });

  public validate(entity: PostTagCategoryValueObject): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
      name: entity.name,
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
