import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { CreatePostUseCaseInterface, CreatePostInputDto, CreatePostOutputDto } from './CreatePostUseCaseInterface';

export class CreatePostUseCase implements CreatePostUseCaseInterface {
  constructor(
    private _postRepository: PostRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
  ) {}

  execute = async ({ title, description, userId, tags, imgs }: CreatePostInputDto): Promise<CreatePostOutputDto> => {
    const post = PostEntity.create({ userId, title });

    post.changeDescription(description);
    post.changeTags(tags);
    post.changeImgs(imgs);

    this._postRepository.save(post);

    const user = await this._userRepository.findById(post.userId.getValue());

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
        username: user?.username ?? '',
        image: user?.image ?? '',
      },
    };
  };
}
