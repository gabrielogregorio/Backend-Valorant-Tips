import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { FindAvailableMapsUseCaseInterface } from './FindAvailableMapsUseCaseInterface';

export class FindAvailableMapsUseCase implements FindAvailableMapsUseCaseInterface {
  constructor(private _postRepository: PostRepositoryInterface) {}

  execute = async (): Promise<string[]> => this._postRepository.findAvailableMaps();
}
