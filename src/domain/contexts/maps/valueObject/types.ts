import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface MapsValueObjectInterface {
  id: UniqueId;
  name: string;
  imageUrl: string;
}
