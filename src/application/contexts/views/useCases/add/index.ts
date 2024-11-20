import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { CreateViewUseCaseInterface } from './CreateViewUseCaseInterface';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';

export class CreateViewUseCase implements CreateViewUseCaseInterface {
  constructor(private viewRepository: ViewsRepositoryInterface) {}

  execute = async (ip: string): Promise<void> => {
    const view = ViewsEntity.create({
      ip,
    });

    await this.viewRepository.save(view);
  };
}
