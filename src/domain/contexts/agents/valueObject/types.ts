import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface AgentsValueObjectInterface {
  id: UniqueId;
  name: string;
  image: string;
}
