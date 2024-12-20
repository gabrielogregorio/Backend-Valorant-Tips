import { PostTagCategoryRepositoryInterface } from '@/domain/contexts/contexts/postTagCategory/repository';
import { PostTagCategoryValueObject } from '@/domain/contexts/contexts/postTagCategory/valueObject';
import { DomainError } from '@/domain/contexts/errors';
import { CreatePostTagCategoryUseCaseInterface } from './CreatePostTagCategoryUseCaseInterface';

export class CreatePostTagCategoryUseCase implements CreatePostTagCategoryUseCaseInterface {
  constructor(private _postTagCategoryRepository: PostTagCategoryRepositoryInterface) {}

  execute = async (
    name: string,
  ): Promise<{
    id: string;
    name: string;
  }> => {
    if (await this._postTagCategoryRepository.findByName(name)) {
      throw new DomainError('AlreadyExists', `post tag category already exists '${name}'`, { name });
    }

    const postCategoryEntity = PostTagCategoryValueObject.create({
      name,
    });

    const postTagCategory = await this._postTagCategoryRepository.save(postCategoryEntity);

    return {
      id: postTagCategory.id.getValue(),
      name: postTagCategory.name,
    };
  };
}
