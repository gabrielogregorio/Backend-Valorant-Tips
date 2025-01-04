import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class AgentsZodValidator implements ValidatorInterface<AgentsValueObject> {
  private _schema = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
  });

  public validate(entity: AgentsValueObject): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
      name: entity.name,
      imageUrl: entity.imageUrl,
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
