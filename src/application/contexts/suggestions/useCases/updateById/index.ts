/* eslint-disable @typescript-eslint/no-explicit-any */
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { AppError } from '@/application/errors/AppError';
import {
  UpdateByIdSuggestionOutputDtoInterface,
  UpdateSuggestionByIdUseCaseInterface,
} from './UpdateSuggestionByIdUseCaseInterface';

export class UpdateSuggestionByIdUseCase implements UpdateSuggestionByIdUseCaseInterface {
  constructor(private _suggestionRepository: SuggestionRepositoryInterface) {}

  execute = async (id: string, status: any): Promise<UpdateByIdSuggestionOutputDtoInterface> => {
    const suggestionUpdated = await this._suggestionRepository.updateById(id, status);
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
