import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { UserEntity } from '@/domain/user/entity/user';
import { UserRepositoryInterface } from '@/domain/user/repository/userRepository.interface';
import {
  FindAllByMapAndAgentUseCaseInterface,
  FindByMapAndAgenteInputDto,
  FindByMapAndAgenteOutputDto,
} from './FindAllByMapAndAgentUseCaseInterface';

export class FindAllByMapAndAgentUseCase implements FindAllByMapAndAgentUseCaseInterface {
  constructor(
    private postRepository: PostRepositoryInterface,
    private userRepository: UserRepositoryInterface,
  ) {}

  execute = async (payload: FindByMapAndAgenteInputDto): Promise<FindByMapAndAgenteOutputDto[]> => {
    const postsItems = await this.postRepository.findAllByMapAndAgent(payload.agent, payload.map);

    if (postsItems.length === 0) {
      return [];
    }
    const users = await this.userRepository.findByIds([...new Set(postsItems.map((user) => user.userId.getValue()))]);
    const userMap = users.reduce(
      (acc, user) => {
        acc[user.id.getValue()] = user;
        return acc;
      },
      {} as Record<string, UserEntity>,
    );

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
