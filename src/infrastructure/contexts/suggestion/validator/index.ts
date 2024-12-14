import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { SuggestionEntity } from '@/domain/contexts/contexts/suggestion/entity';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class SuggestionZodValidator implements ValidatorInterface<SuggestionEntity> {
  private _schema = z.object({
    id: z.string(),
  });

  public validate(entity: SuggestionEntity): void {
    const result = this._schema.safeParse({
      id: entity.id.getValue(),
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
