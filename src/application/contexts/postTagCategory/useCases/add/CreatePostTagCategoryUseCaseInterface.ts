export interface CreatePostTagCategoryUseCaseInterface {
  execute: (name: string) => Promise<{
    id: string;
    name: string;
  }>;
}
