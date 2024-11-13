import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { z } from 'zod';

export class UserYupValidator implements ValidatorInterface<UserEntity> {
  private schema = z.object({
    id: z.string(),
  });

  public validate(entity: UserEntity): void {
    try {
      this.schema.parse({
        id: entity.id,
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          entity.notification.addError({
            context: 'UserEntity',
            message: error.message,
          });
        });
        return;
      }

      throw e;
    }
  }
}
