import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { CreatePostUseCaseInterface, CreatePostInputDto, CreatePostOutputDto } from './CreatePostUseCaseInterface';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';

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

    const user = await this.userRepository.findById(post.userId.getValue());

    return {
      id: post.id.getValue(),
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
