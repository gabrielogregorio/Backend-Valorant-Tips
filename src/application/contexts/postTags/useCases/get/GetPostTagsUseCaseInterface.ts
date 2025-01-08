export interface GetPostTagsOutputDtoInterface {
  name: string;
  id: string;
  categoryId: string;
}

export interface GetPostTagsUseCaseInterface {
  execute: () => Promise<GetPostTagsOutputDtoInterface[]>;
}
