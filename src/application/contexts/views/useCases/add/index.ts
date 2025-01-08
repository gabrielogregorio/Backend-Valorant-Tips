import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { ViewsValueObject } from '@/domain/contexts/contexts/views/valueObject';
import { CreateViewUseCaseInterface } from './CreateViewUseCaseInterface';

export class CreateViewUseCase implements CreateViewUseCaseInterface {
  constructor(private _viewRepository: ViewsRepositoryInterface) {}

  execute = async (ip: string): Promise<void> => {
    const view = ViewsValueObject.create({
      ip,
    });

    await this._viewRepository.save(view);
  };
}
