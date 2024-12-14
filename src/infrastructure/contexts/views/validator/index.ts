import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { ViewsValueObject } from '@/domain/contexts/contexts/views/valueObject';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class ViewsZodValidator implements ValidatorInterface<ViewsValueObject> {
  private _schema = z.object({
    id: z.string(),
    dateAccess: z.date(),
  });

  public validate(entity: ViewsValueObject): void {
    const result = this._schema.safeParse({
      ip: entity.ip,
      dateAccess: entity.dateAccess,
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
