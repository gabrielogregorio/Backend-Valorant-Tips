import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { GetViewUseCaseInterface, GetViewsOutputDtoInterface } from './GetViewUseCaseInterface';

export class GetViewUseCase implements GetViewUseCaseInterface {
  constructor(private _viewRepository: ViewsRepositoryInterface) {}

  execute = async (): Promise<GetViewsOutputDtoInterface> => {
    const count2 = await this._viewRepository.findAllDistinctIp();
    const count = await this._viewRepository.findAll();
    const countAll = count.length;
    const countIps = count2.length;

    return { countAll, countIps };
  };
}
