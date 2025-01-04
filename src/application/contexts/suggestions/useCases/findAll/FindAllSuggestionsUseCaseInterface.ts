/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FindAllSuggestionsOutputDtoInterface {
  status: any;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FindAllSuggestionsUseCaseInterface {
  execute: () => Promise<FindAllSuggestionsOutputDtoInterface[]>;
}
