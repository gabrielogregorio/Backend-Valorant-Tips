import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';

export interface AgentsRepositoryInterface extends RepositoryInterface<AgentsValueObject> {
  save: (view: AgentsValueObject) => Promise<AgentsValueObject>;
  findAll: () => Promise<AgentsValueObject[]>;
  findByName: (name: string) => Promise<AgentsValueObject | null>;
  findByIds: (ids: string[]) => Promise<AgentsValueObject[]>;
}
