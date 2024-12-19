import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';

export interface MapsRepositoryInterface extends RepositoryInterface<MapsValueObject> {
  save: (view: MapsValueObject) => Promise<MapsValueObject>;
  findAll: () => Promise<MapsValueObject[]>;
  findByName: (name: string) => Promise<MapsValueObject | null>;
}
