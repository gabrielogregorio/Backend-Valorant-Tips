import { AppError } from '@/application/errors/AppError';
import {
  CreateSuggestionUseCaseInterface,
  CreateSuggestionInputDto,
  SuggestionOutputDto,
} from './createSuggestionUseCase';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { SuggestionEntity } from '@/domain/contexts/contexts/suggestion/entity';
import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';

export class CreateSuggestionUseCase implements CreateSuggestionUseCaseInterface {
  constructor(
    private suggestionRepository: SuggestionRepositoryInterface,
    private postRepository: PostRepositoryInterface,
  ) {}

  execute = async (dto: CreateSuggestionInputDto): Promise<SuggestionOutputDto> => {
    const postFound = await this.postRepository.findById(dto.postId);
    if (!postFound) {
      throw new AppError('POST_NOT_EXISTS', { ...dto });
    }

    const suggestion = SuggestionEntity.create({
      postId: dto.postId,
      description: dto.description,
      email: dto.email,
    });

    const suggestionCreated = await this.suggestionRepository.save(suggestion);

    return this.toOutputDto(suggestionCreated);
  };

  private toOutputDto(suggestion: SuggestionEntityInterface): SuggestionOutputDto {
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
