import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class CodeZodValidator implements ValidatorInterface<CodeEntity> {
  private _schema = z.object({ code: z.string() });

  public validate(entity: CodeEntity): void {
    const result = this._schema.safeParse({
      code: entity.code.getValue(),
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
