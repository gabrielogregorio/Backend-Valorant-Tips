import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { AgentsZodValidator } from '@/infrastructure/contexts/agents/validator';

export class AgentsValidatorFactory {
  static create(): ValidatorInterface<AgentsValueObject> {
    return new AgentsZodValidator();
  }
}
