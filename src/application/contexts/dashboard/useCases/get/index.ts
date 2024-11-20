import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { DashboardUseCaseInterface, DashboardOutputDto } from './DashboardUseCaseInterface';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';

export class DashboardUseCase implements DashboardUseCaseInterface {
  constructor(
    private UserRepository: UserRepositoryInterface,
    private postRepository: PostRepositoryInterface,
    private suggestionRepository: SuggestionRepositoryInterface,
    private viewsRepository: ViewsRepositoryInterface,
  ) {}

  execute = async (): Promise<DashboardOutputDto> => {
    const [countAllPosts, countAlMaps, countAlAgents, countAllSuggestions, countAllUsers, count2, count] =
      await Promise.all([
        await this.postRepository.countAll(),
        await this.postRepository.findMaps(),
        await this.postRepository.findAgents(),
        await this.suggestionRepository.count(),
        await this.UserRepository.countDocuments(),
        await this.viewsRepository.findAllDistinctIp(),
        await this.viewsRepository.findAll(),
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
