import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { FindAllSuggestionsUseCaseInterface, FindAllSuggestionsOutputDto } from './FindAllSuggestionsUseCaseInterface';

export class FindAllSuggestionsUseCase implements FindAllSuggestionsUseCaseInterface {
  constructor(private suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (): Promise<FindAllSuggestionsOutputDto[]> => {
    const suggestions = await this.suggestionRepository.findAll();

    return suggestions.map((suggestion) => {
      return {
        createdAt: suggestion.createdAt,
        description: suggestion.description,
        email: suggestion.email,
        id: suggestion.id.getValue(),
        postId: suggestion.postId.getValue(),
        status: suggestion.status,
        updatedAt: suggestion.updatedAt,
      };
    });
  };
}
