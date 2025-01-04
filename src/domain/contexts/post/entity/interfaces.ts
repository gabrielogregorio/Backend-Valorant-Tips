import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';

export interface PostStepInterface {
  id: UniqueId;
  description: string;
  imageUrl: string;
}

export interface PostEntityInterface {
  deletePost(): void;
  unpublishPost(): void;
  publishPost(): void;

  changeTags(tags: PostTagsValueObject[]): void;
  changeSteps(steps: PostStepInterface[]): void;
  changeMap(map: MapsValueObject[]): void;
  changeAgents(agents: AgentsValueObject[]): void;
  changeAuthors(authors: UserEntity[]): void;
  changeDescription(description: string): void;
  changeTitle(title: string): void;

  readonly id: UniqueId;
  readonly createdAt: Date;

  updateAt: Date;
  title: string;
  description: string;
  isDeleted: boolean;
  isPublished: boolean;
  authors: UserEntity[];
  agents: AgentsValueObject[];
  maps: MapsValueObject[];
  tags: PostTagsValueObject[];
  steps: PostStepInterface[];
}
