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
  get id(): string;

  get title(): string;

  get description(): string;

  get userId(): string;

  get tags(): PostTagsInterface;

  get imgs(): PostImagesInterface[];

  changeTags(tags: PostTagsInterface): void;
  changeDescription(description: string): void;
  changeImgs(imgs: PostImagesInterface[]): void;
}
