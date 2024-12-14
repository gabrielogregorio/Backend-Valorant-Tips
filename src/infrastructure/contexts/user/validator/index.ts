import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { ValidationError } from '@/infrastructure/contexts/validationError';
import { z } from 'zod';

export class UserZodValidator implements ValidatorInterface<UserEntity> {
  private _schema = z.object({
    id: z.string(),
  });

  public validate(entity: UserEntity): void {
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
