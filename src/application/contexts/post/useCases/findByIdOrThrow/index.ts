import { AppError } from '@/application/errors/AppError';
import {
  FindPostByIdOrThrowUseCaseInterface,
  FindPostByIdOrThrowUseCaseOutputDto,
} from './IFindPostByIdOrThrowUseCase';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';

export class FindPostByIdOrThrowUseCase implements FindPostByIdOrThrowUseCaseInterface {
  constructor(
    private postRepository: PostRepositoryInterface,
    private userRepository: UserRepositoryInterface,
  ) {}

  execute = async (postId: string): Promise<FindPostByIdOrThrowUseCaseOutputDto> => {
    const post = await this.postRepository.findById(postId);

    if (!post) {
      throw new AppError('POST_NOT_EXISTS', { postId });
    }

    const userData = await this.userRepository.findById(post.userId.getValue());

    return {
      id: post.id.getValue(),
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      user: {
        username: userData?.username || '',
        image: userData?.image || '',
      },
    };
  };
}
