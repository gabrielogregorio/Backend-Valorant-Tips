import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { ViewsEntity } from '@/domain/contexts/contexts/views/entity';

export interface ViewsRepositoryInterface extends RepositoryInterface<ViewsEntity> {
  save: (view: ViewsEntity) => Promise<ViewsEntity>;
  findAll: () => Promise<ViewsEntity[]>;
  findAllDistinctIp: () => Promise<string[]>;
}
