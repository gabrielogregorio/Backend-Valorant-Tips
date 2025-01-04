import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PostPresenter } from '@/application/presenters/post';
import {
  FindAllByMapAndAgentUseCaseInterface,
  FindByMapAndAgentInputDtoInterface,
  FindByMapAndAgentOutputDtoInterface,
} from './FindAllByMapAndAgentUseCaseInterface';

export class FindAllByMapAndAgentUseCase implements FindAllByMapAndAgentUseCaseInterface {
  constructor(
    private _postRepository: PostRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
  ) {}

  execute = async (payload: FindByMapAndAgentInputDtoInterface): Promise<FindByMapAndAgentOutputDtoInterface[]> => {
    const postsItems = await this._postRepository.findAllByMapAndAgent(payload.agent, payload.map);

    return postsItems.map((post) => PostPresenter.toHTTP(post));
  };
}
