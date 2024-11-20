import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { FindAvailableMapsUseCaseInterface } from './FindAvailableMapsUseCaseInterface';

export class FindAvailableMapsUseCase implements FindAvailableMapsUseCaseInterface {
  constructor(private postRepository: PostRepositoryInterface) {}

  execute = async (): Promise<string[]> => this.postRepository.findAvailableMaps();
}
