export interface GetPostTagCategoryOutputDtoInterface {
  name: string;
  id: string;
}

export interface GetPostTagCategoryUseCaseInterface {
  execute: () => Promise<GetPostTagCategoryOutputDtoInterface[]>;
}
