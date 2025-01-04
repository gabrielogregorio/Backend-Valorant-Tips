/* eslint-disable max-params */
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { DomainError } from '@/domain/contexts/errors';
import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostPresenter } from '@/application/presenters/post';
import {
  UpdatePostInputDtoInterface,
  UpdatePostOutputDtoInterface,
  UpdatePostUseCaseInterface,
} from './UpdatePostUseCaseInterface';

export class UpdatePostUseCase implements UpdatePostUseCaseInterface {
  constructor(
    private _postRepository: PostRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
    private _mapsRepository: MapsRepositoryInterface,
    private _agentsRepository: AgentsRepositoryInterface,
    private _postTagsRepository: PostTagsRepositoryInterface,
  ) {}

  execute = async (id: string, payload: UpdatePostInputDtoInterface): Promise<UpdatePostOutputDtoInterface> => {
    const { title, description, agentIds, authorIds, mapIds, steps, tagIds } = payload;

    const authors = await this._userRepository.findByIds(authorIds);
    if (!authors) {
      throw new DomainError('NotFound', `user id '${authorIds}' not found to create post`, { authorIds });
    }

    const agents = await this._agentsRepository.findByIds(agentIds);
    if (!agents) {
      throw new DomainError('NotFound', `agents id '${agentIds}' not found to create post`, { agentIds });
    }

    const maps = await this._mapsRepository.findByIds(mapIds);
    if (!maps) {
      throw new DomainError('NotFound', `maps id '${agentIds}' not found to create post`, { agentIds });
    }

    const tags = await this._postTagsRepository.findByIds(tagIds);
    if (!tags) {
      throw new DomainError('NotFound', `tagIds id '${tagIds}' not found to create post`, { tagIds });
    }

    const post = PostEntity.create({ authors, description, title });
    post.changeAgents(agents);
    post.changeMap(maps);
    post.changeTags(tags);
    post.changeSteps(steps);

    const postUpdated = await this._postRepository.update(post);

    return PostPresenter.toHTTP(postUpdated);
  };
}
