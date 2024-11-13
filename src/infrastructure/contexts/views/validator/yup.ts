import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';
import { z } from 'zod';

export class ViewsYupValidator implements ValidatorInterface<ViewsEntity> {
  private schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  public validate(entity: ViewsEntity): void {
    try {
      this.schema.parse({
        ip: entity.ip,
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          entity.notification.addError({
            context: 'ViewsEntity',
            message: error.message,
          });
        });
        return;
      }

      throw e;
    }
  }
}
