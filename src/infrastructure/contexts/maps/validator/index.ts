import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class MapsZodValidator implements ValidatorInterface<MapsValueObject> {
  private _schema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
  });

  public validate(entity: MapsValueObject): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
      name: entity.name,
      image: entity.image,
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
