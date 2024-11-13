import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { SuggestionEntity } from '@/domain/contexts/contexts/suggestion/entity';
import { z } from 'zod';

export class SuggestionZodValidator implements ValidatorInterface<SuggestionEntity> {
  private schema = z.object({
    id: z.string(),
  });

  public validate(entity: SuggestionEntity): void {
    try {
      this.schema.parse({
        id: entity.id.getValue(),
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          entity.notification.addError({
            context: 'SuggestionEntity',
            message: error.message,
          });
        });
        return;
      }

      throw e;
    }
  }
}
