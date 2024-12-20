import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface PostTagsValueObjectInterface {
  id: UniqueId;
  name: string;
  categoryId: UniqueId;
}
