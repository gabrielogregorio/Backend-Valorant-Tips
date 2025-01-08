import {
  GetPostTagsOutputDtoInterface,
  GetPostTagsUseCaseInterface,
} from '@/application/contexts/postTags/useCases/get/GetPostTagsUseCaseInterface';
import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';

export class GetPostTagsUseCase implements GetPostTagsUseCaseInterface {
  constructor(private _postTagsRepository: PostTagsRepositoryInterface) {}

  execute = async (): Promise<GetPostTagsOutputDtoInterface[]> => {
    const postTags = await this._postTagsRepository.findAll();

    return postTags.map((postTag) => ({
      id: postTag.id.getValue(),
      categoryId: postTag.categoryId.getValue(),
      name: postTag.name,
    }));
  };
}
