import { DomainError } from '@/domain/contexts/errors';
import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { PostTagCategoryRepositoryInterface } from '@/domain/contexts/contexts/postTagCategory/repository';
import { CreatePostTagsUseCaseInterface } from './CreatePostTagsUseCaseInterface';

export class CreatePostTagsUseCase implements CreatePostTagsUseCaseInterface {
  constructor(
    private _postTagsRepository: PostTagsRepositoryInterface,
    private _postTagCategoryRepository: PostTagCategoryRepositoryInterface,
  ) {}

  execute = async (
    name: string,
    categoryId: string,
  ): Promise<{
    id: string;
    name: string;
    categoryId: string;
  }> => {
    if (await this._postTagsRepository.findByName(name)) {
      throw new DomainError('AlreadyExists', `post tag already exists '${name}'`, { name });
    }

    if (!(await this._postTagCategoryRepository.findByIds([categoryId]))[0]?.id.getValue()) {
      // throw 404
      throw new DomainError('NotFound', `category not found '${categoryId}'`, { categoryId });
    }

    const postTagsEntity = PostTagsValueObject.create({
      name,
      categoryId,
    });

    const postTag = await this._postTagsRepository.save(postTagsEntity);

    return {
      id: postTag.id.getValue(),
      categoryId: postTag.categoryId.getValue(),
      name: postTag.name,
    };
  };
}
