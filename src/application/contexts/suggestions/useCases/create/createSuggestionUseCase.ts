/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CreateSuggestionInputDtoInterface {
  email: string;
  description: string;
  postId: string;
}

export interface SuggestionOutputDtoInterface {
  status: any;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSuggestionUseCaseInterface {
  execute: (dto: CreateSuggestionInputDtoInterface) => Promise<SuggestionOutputDtoInterface>;
}
