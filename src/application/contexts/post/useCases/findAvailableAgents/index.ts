import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { FindAvailableAgentsUseCaseInterface } from './FindAvailableAgentsUseCaseInterface';

export class FindAvailableAgentsUseCase implements FindAvailableAgentsUseCaseInterface {
  constructor(private _postRepository: PostRepositoryInterface) {}

  execute = async (map: string): Promise<string[]> => this._postRepository.findAvailableAgents(map);
}
