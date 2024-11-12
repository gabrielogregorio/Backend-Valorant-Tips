import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { PostEntity } from '@/domain/post/entity/post';
import { UserRepositoryInterface } from '@/domain/user/repository/userRepository.interface';
import { UpdatePostInputDto, UpdatePostOutputDto, UpdatePostUseCaseInterface } from './UpdatePostUseCaseInterface';

export class UpdatePostUseCase implements UpdatePostUseCaseInterface {
  constructor(
    private postRepository: PostRepositoryInterface,
    private userRepository: UserRepositoryInterface,
  ) {}

  execute = async (id: string, payload: UpdatePostInputDto): Promise<UpdatePostOutputDto> => {
    const { title, description, tags, imgs, userId } = payload;

    const post = PostEntity.restore({ userId: String(userId), title: title || '', id });

    if (description) {
      post.changeDescription(description);
    }

    if (tags) {
      post.changeTags(tags);
    }

    const newImgs: { description: string; id: string; image: string }[] = [];
    imgs?.forEach((img) => {
      newImgs.push({
        description: img.description,
        id: img.id,
        image: img.image,
      });
    });

    if (newImgs.length) {
      post.changeImgs(newImgs);
    }

    const postService = await this.postRepository.update(post);

    const userData = await this.userRepository.findById(postService.userId);
    return {
      id: postService.id,
      description: postService.description,
      imgs: postService.imgs,
      tags: postService.tags,
      title: postService.title,
      user: {
        image: userData?.image || '',
        username: userData?.username || '',
      },
    };
  };
}
