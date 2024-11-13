import { ValidatorInterface } from '@/domain/contexts/common/validators/validator.interface';
import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { SuggestionYupValidator } from '@/infrastructure/contexts/suggestion/validator/suggestion.yup';

export class SuggestionValidatorFactory {
  static create(): ValidatorInterface<SuggestionEntityInterface> {
    return new SuggestionYupValidator();
  }
}
