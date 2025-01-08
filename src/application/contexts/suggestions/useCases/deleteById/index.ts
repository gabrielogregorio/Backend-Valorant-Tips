import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { DeleteSuggestionByIdUseCaseInterface } from './DeleteSuggestionByIdUseCaseInterface';

export class DeleteSuggestionByIdUseCase implements DeleteSuggestionByIdUseCaseInterface {
  constructor(private _suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (id: string): Promise<void> => {
    const suggestion = await this._suggestionRepository.findById(id);

    suggestion.delete();

    await this._suggestionRepository.deleteById(id);
  };
}
