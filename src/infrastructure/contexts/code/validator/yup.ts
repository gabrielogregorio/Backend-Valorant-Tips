import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { z } from 'zod';

export class CodeYupValidator implements ValidatorInterface<CodeEntity> {
  private schema = z.object({});

  validate(entity: CodeEntity): void {
    try {
      this.schema.parse({
        id: entity.code.getValue(),
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          entity.notification.addError({
            context: 'CodeEntity',
            message: error.message,
          });
        });

        return;
      }

      throw e;
    }
  }
}
