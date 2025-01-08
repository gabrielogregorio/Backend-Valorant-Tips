import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class PostZodValidator implements ValidatorInterface<PostEntity> {
  private _schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  public validate(entity: PostEntity): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
      title: entity.title,
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
