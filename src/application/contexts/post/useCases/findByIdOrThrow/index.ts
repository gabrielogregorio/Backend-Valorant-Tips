import { AppError } from '@/application/errors/AppError';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { PostPresenter, PostPresenterToHttp } from '@/application/presenters/post';
import { FindPostByIdOrThrowUseCaseInterface } from './IFindPostByIdOrThrowUseCase';

export class FindPostByIdOrThrowUseCase implements FindPostByIdOrThrowUseCaseInterface {
  constructor(private _postRepository: PostRepositoryInterface) {}

  execute = async (postId: string): Promise<PostPresenterToHttp> => {
    const post = await this._postRepository.findById(postId);

    if (!post) {
      throw new AppError('POST_NOT_EXISTS', { postId });
    }

    return PostPresenter.toHTTP(post);
  };
}
