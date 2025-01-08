import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';

export interface PostTagsRepositoryInterface extends RepositoryInterface<PostTagsValueObject> {
  save: (entity: PostTagsValueObject) => Promise<PostTagsValueObject>;
  findAll: () => Promise<PostTagsValueObject[]>;
  findByIds: (ids: string[]) => Promise<PostTagsValueObject[]>;
  findByName: (name: string) => Promise<PostTagsValueObject | null>;
}
