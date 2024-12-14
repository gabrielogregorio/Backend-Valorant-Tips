import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { ViewsValueObject } from '@/domain/contexts/contexts/views/valueObject';

export interface ViewsRepositoryInterface extends RepositoryInterface<ViewsValueObject> {
  save: (view: ViewsValueObject) => Promise<ViewsValueObject>;
  findAll: () => Promise<ViewsValueObject[]>;
  findAllDistinctIp: () => Promise<string[]>;
}
