import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class ViewsZodValidator implements ValidatorInterface<ViewsEntity> {
  private schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  public validate(entity: ViewsEntity): void {
    const result = this.schema.safeParse({
      ip: entity.ip,
    });

    if (!result?.error) {
      return;
    }

    throw new ValidationError(
      result.error.errors.map((item) => ({
        location: item.path[0].toString(),
        message: item.message,
        path: item.path
          .reduce((prev, current) => {
            if (prev) {
              return `${prev}.${current}`;
            }
            return current;
          }, '')
          .toString(),
        type: item.code,
      })),
    );
  }
}
