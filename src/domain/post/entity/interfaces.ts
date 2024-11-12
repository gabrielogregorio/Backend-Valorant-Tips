import { UniqueId } from '@/domain/common/utils/UniqueId';

export type PostTagsInterface = {
  moment: string;
  difficult: string;
  ability: string;
  side: string;
  map: string;
  mapPosition: string;
  agent: string;
};

export type PostImagesInterface = {
  id: string;
  description: string;
  image: string;
};

export interface PostInterface {
  get id(): UniqueId;

  get title(): string;

  get description(): string;

  get userId(): UniqueId;

  get tags(): PostTagsInterface;

  get imgs(): PostImagesInterface[];

  changeTags(tags: PostTagsInterface): void;
  changeDescription(description: string): void;
  changeImgs(imgs: PostImagesInterface[]): void;
}
