import { AppError } from '@/application/errors/AppError';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { SuggestionEntity } from '@/domain/contexts/contexts/suggestion/entity';
import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import {
  CreateSuggestionUseCaseInterface,
  CreateSuggestionInputDtoInterface,
  SuggestionOutputDtoInterface,
} from './createSuggestionUseCase';

export class CreateSuggestionUseCase implements CreateSuggestionUseCaseInterface {
  constructor(
    private _suggestionRepository: SuggestionRepositoryInterface,
    private _postRepository: PostRepositoryInterface,
  ) {}

  execute = async (dto: CreateSuggestionInputDtoInterface): Promise<SuggestionOutputDtoInterface> => {
    const postFound = await this._postRepository.findById(dto.postId);
    if (!postFound) {
      throw new AppError('POST_NOT_EXISTS', { ...dto });
    }

    const suggestion = SuggestionEntity.create({
      postId: dto.postId,
      description: dto.description,
      email: dto.email,
    });

    const suggestionCreated = await this._suggestionRepository.save(suggestion);

    return this._toOutputDto(suggestionCreated);
  };

  private _toOutputDto(suggestion: SuggestionEntityInterface): SuggestionOutputDtoInterface {
    return {
      createdAt: suggestion.createdAt,
      description: suggestion.description,
      email: suggestion.email,
      id: suggestion.id.getValue(),
      postId: suggestion.postId.getValue(),
      status: suggestion.status,
      updatedAt: suggestion.updatedAt,
    };
  }
}
