import { PostEntity } from '@/domain/post/entity/post';
import { UserRepositoryInterface } from '@/domain/user/repository/userRepository.interface';
import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { CreatePostUseCaseInterface, CreatePostInputDto, CreatePostOutputDto } from './CreatePostUseCaseInterface';

export class CreatePostUseCase implements CreatePostUseCaseInterface {
  constructor(
    private postRepository: PostRepositoryInterface,
    private userRepository: UserRepositoryInterface,
  ) {}

  execute = async ({ title, description, userId, tags, imgs }: CreatePostInputDto): Promise<CreatePostOutputDto> => {
    const post = PostEntity.create({ userId, title });

    post.changeDescription(description);
    post.changeTags(tags);
    post.changeImgs(imgs);

    this.postRepository.save(post);

    const user = await this.userRepository.findById(post.userId);

    return {
      id: post.id,
      description: post.description,
      imgs: post.imgs.map((img) => ({
        description: img.description,
        id: img.id,
        image: img.image,
      })),
      tags: post.tags,
      title: post.title,
      user: {
        username: user?.username || '',
        image: user?.image || '',
      },
    };
  };
}
