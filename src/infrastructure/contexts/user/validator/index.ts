import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { z } from 'zod';

export class UserZodValidator implements ValidatorInterface<UserEntity> {
  private schema = z.object({
    id: z.string(),
  });

  public validate(entity: UserEntity): void {
    try {
      this.schema.parse({
        id: entity.id.getValue(),
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((errorItem) => {
          entity.notification.addError({
            context: 'UserEntity',
            message: errorItem.message,
          });
        });
        return;
      }

      throw error;
    }
  }
}
