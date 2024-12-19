import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { DashboardUseCaseInterface, DashboardOutputDtoInterface } from './DashboardUseCaseInterface';

export class DashboardUseCase implements DashboardUseCaseInterface {
  constructor(
    private _userRepository: UserRepositoryInterface,
    private _postRepository: PostRepositoryInterface,
    private _suggestionRepository: SuggestionRepositoryInterface,
    private _viewsRepository: ViewsRepositoryInterface,
  ) {}

  execute = async (): Promise<DashboardOutputDtoInterface> => {
    const [countAllPosts, countAlMaps, countAlAgents, countAllSuggestions, countAllUsers, count2, count] =
      await Promise.all([
        await this._postRepository.countAll(),
        await this._postRepository.findMaps(),
        await this._postRepository.findAgents(),
        await this._suggestionRepository.count(),
        await this._userRepository.countDocuments(),
        await this._viewsRepository.findAllDistinctIp(),
        await this._viewsRepository.findAll(),
      ]);

    return {
      countAll: count.length,
      countIps: count2.length,
      countAllPosts,
      countAlMaps: countAlMaps.length,
      countAlAgents: countAlAgents.length,
      countAllSuggestions,
      countAllUsers,
    };
  };
}
