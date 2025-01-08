import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import {
  FindAllSuggestionsUseCaseInterface,
  FindAllSuggestionsOutputDtoInterface,
} from './FindAllSuggestionsUseCaseInterface';

export class FindAllSuggestionsUseCase implements FindAllSuggestionsUseCaseInterface {
  constructor(private _suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (): Promise<FindAllSuggestionsOutputDtoInterface[]> => {
    const suggestions = await this._suggestionRepository.findAll();

    return suggestions.map((suggestion) => ({
      createdAt: suggestion.createdAt,
      description: suggestion.description,
      email: suggestion.email,
      id: suggestion.id.getValue(),
      postId: suggestion.postId.getValue(),
      status: suggestion.status,
      updatedAt: suggestion.updatedAt,
    }));
  };
}
