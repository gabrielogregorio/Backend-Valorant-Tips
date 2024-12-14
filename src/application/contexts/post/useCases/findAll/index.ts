import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { FindAllPostUseCaseInterface, FindAllPostOutputDtoInterface } from './FindAllPostUseCaseInterface';

export class FindAllPostUseCase implements FindAllPostUseCaseInterface {
  constructor(
    private _postRepository: PostRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
  ) {}

  execute = async (): Promise<FindAllPostOutputDtoInterface[]> => {
    const postsItems = await this._postRepository.findAll();
    if (postsItems.length === 0) {
      return [];
    }

    const ids = [...new Set(postsItems.map((user) => user.userId.getValue()))];
    const users = await this._userRepository.findByIds(ids);

    const userMap: { [key: string]: UserEntity } = {};
    users.forEach((user) => {
      userMap[user.id.getValue()] = user;
    });

    return postsItems.map((post) => ({
      id: post.id.getValue(),
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      user: {
        image: userMap[post.userId.getValue()]?.image || '',
        username: userMap[post.userId.getValue()]?.username || '',
      },
    }));
  };
}