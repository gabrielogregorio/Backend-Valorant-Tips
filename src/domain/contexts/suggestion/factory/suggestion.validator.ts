import { ValidatorInterface } from '@/domain/contexts/common/validators';
import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { SuggestionZodValidator } from '@/infrastructure/contexts/suggestion/validator';

export class SuggestionValidatorFactory {
  static create(): ValidatorInterface<SuggestionEntityInterface> {
    return new SuggestionZodValidator();
  }
}
