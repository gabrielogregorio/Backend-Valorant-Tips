import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { UserEntity } from '@/domain/user/entity/user';
import { UserRepositoryInterface } from '@/domain/user/repository/userRepository.interface';
import { FindAllPostUseCaseInterface, FindAllPostOutputDto } from './FindAllPostUseCaseInterface';

export class FindAllPostUseCase implements FindAllPostUseCaseInterface {
  constructor(
    private postRepository: PostRepositoryInterface,
    private userRepository: UserRepositoryInterface,
  ) {}

  execute = async (): Promise<FindAllPostOutputDto[]> => {
    const postsItems = await this.postRepository.findAll();
    if (postsItems.length === 0) {
      return [];
    }

    const ids = [...new Set(postsItems.map((user) => user.userId.getValue()))];
    const users = await this.userRepository.findByIds(ids);

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
