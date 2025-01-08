export interface CreatePostTagsUseCaseInterface {
  execute: (
    name: string,
    categoryId: string,
  ) => Promise<{
    id: string;
    name: string;
    categoryId: string;
  }>;
}
