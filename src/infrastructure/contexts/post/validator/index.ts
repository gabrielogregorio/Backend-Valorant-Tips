import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { z } from 'zod';

export class PostZodValidator implements ValidatorInterface<PostEntity> {
  private schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  public validate(entity: PostEntity): void {
    try {
      this.schema.parse({
        id: entity.id.getValue(),
        title: entity.title,
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          entity.notification.addError({
            context: 'PostEntity',
            message: error.message,
          });
        });
        return;
      }

      throw e;
    }
  }
}
