import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { PostTagCategoryValueObject } from '@/domain/contexts/contexts/postTagCategory/valueObject';

export interface PostTagCategoryRepositoryInterface extends RepositoryInterface<PostTagCategoryValueObject> {
  save: (entity: PostTagCategoryValueObject) => Promise<PostTagCategoryValueObject>;
  findAll: () => Promise<PostTagCategoryValueObject[]>;
  findByIds: (ids: string[]) => Promise<PostTagCategoryValueObject[]>;
  findByName: (name: string) => Promise<PostTagCategoryValueObject | null>;
}
