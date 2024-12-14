import { StatusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { AppError } from '@/application/errors/AppError';
import {
  UpdateByIdSuggestionOutputDto,
  UpdateSuggestionByIdUseCaseInterface,
} from './UpdateSuggestionByIdUseCaseInterface';

export class UpdateSuggestionByIdUseCase implements UpdateSuggestionByIdUseCaseInterface {
  constructor(private suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (id: string, status: StatusSuggestionType): Promise<UpdateByIdSuggestionOutputDto> => {
    const suggestionUpdated = await this.suggestionRepository.updateById(id, status);
    if (suggestionUpdated === null) {
      throw new AppError('SUGGESTION_NOT_FOUND', { id, status });
    }

    return {
      createdAt: suggestionUpdated.createdAt,
      description: suggestionUpdated.description,
      updatedAt: suggestionUpdated.updatedAt,
      email: suggestionUpdated.email,
      id: suggestionUpdated.id.getValue(),
      postId: suggestionUpdated.postId.getValue(),
      status: suggestionUpdated.status,
    };
  };
}
