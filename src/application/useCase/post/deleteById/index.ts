import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { AppError } from '@/application/errors/AppError';
import { DeletePostUseCaseInterface } from './DeletePostUseCaseInterface';

export class DeletePostUseCase implements DeletePostUseCaseInterface {
  constructor(private postRepository: PostRepositoryInterface) {}

  execute = async (idPost: string, userId: string): Promise<void> => {
    const post = await this.postRepository.findById(idPost);
    if (!post) {
      throw new AppError('POST_NOT_EXISTS');
    }

    const postIsNotYours = !post?.userId || !userId || post?.userId.getValue() !== userId;
    if (postIsNotYours) {
      throw new AppError('NO_CAN_DELETE_POST_ANOTHER_USER', { userId, postId: post.id.getValue() });
    }

    this.postRepository.deleteById(idPost);
  };
}
