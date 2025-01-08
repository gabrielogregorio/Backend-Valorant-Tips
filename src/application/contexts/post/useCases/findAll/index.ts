import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { PostPresenter } from '@/application/presenters/post';
import { FindAllPostUseCaseInterface, FindAllPostOutputDtoInterface } from './FindAllPostUseCaseInterface';

export class FindAllPostUseCase implements FindAllPostUseCaseInterface {
  constructor(private _postRepository: PostRepositoryInterface) {}

  execute = async (): Promise<FindAllPostOutputDtoInterface[]> => {
    const postsItems = await this._postRepository.findAll();

    return postsItems.map((post) => PostPresenter.toHTTP(post));
  };
}
