import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { UpdatePostInputDto, UpdatePostOutputDto, UpdatePostUseCaseInterface } from './UpdatePostUseCaseInterface';

export class UpdatePostUseCase implements UpdatePostUseCaseInterface {
  constructor(
    private _postRepository: PostRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
  ) {}

  execute = async (id: string, payload: UpdatePostInputDto): Promise<UpdatePostOutputDto> => {
    const { title, description, tags, imgs, userId } = payload;

    const post = PostEntity.restore({ userId: String(userId), title: title ?? '', id });

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

    const postService = await this._postRepository.update(post);

    const userData = await this._userRepository.findById(postService.userId.getValue());
    return {
      id: postService.id.getValue(),
      description: postService.description,
      imgs: postService.imgs,
      tags: postService.tags,
      title: postService.title,
      user: {
        image: userData?.image ?? '',
        username: userData?.username ?? '',
      },
    };
  };
}
