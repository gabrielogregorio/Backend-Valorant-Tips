import { statusSuggestionType } from '@/domain/suggestion/entity/interfaces';
import { SuggestionRepositoryInterface } from '@/domain/suggestion/repository';
import { AppError } from '../../../errors/AppError';
import {
  UpdateByIdSuggestionOutputDto,
  UpdateSuggestionByIdUseCaseInterface,
} from './UpdateSuggestionByIdUseCaseInterface';

export class UpdateSuggestionByIdUseCase implements UpdateSuggestionByIdUseCaseInterface {
  constructor(private suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (id: string, status: statusSuggestionType): Promise<UpdateByIdSuggestionOutputDto> => {
    const suggestionUpdated = await this.suggestionRepository.updateById(id, status);
    if (suggestionUpdated === null) {
      throw new AppError('SUGGESTION_NOT_FOUND', { suggestionId: id });
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
