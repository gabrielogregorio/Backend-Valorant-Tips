import { PostTagCategoryRepositoryInterface } from '@/domain/contexts/contexts/postTagCategory/repository';
import {
  GetPostTagCategoryUseCaseInterface,
  GetPostTagCategoryOutputDtoInterface,
} from './GetPostTagCategoryUseCaseInterface';

export class GetPostTagCategoryUseCase implements GetPostTagCategoryUseCaseInterface {
  constructor(private _postTagCategoryRepository: PostTagCategoryRepositoryInterface) {}

  execute = async (): Promise<GetPostTagCategoryOutputDtoInterface[]> => {
    const postTagCategories = await this._postTagCategoryRepository.findAll();

    return postTagCategories.map((postTagCategory) => ({
      id: postTagCategory.id.getValue(),
      name: postTagCategory.name,
    }));
  };
}
