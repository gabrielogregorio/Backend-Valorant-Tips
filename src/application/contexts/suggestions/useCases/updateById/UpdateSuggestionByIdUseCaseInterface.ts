export interface UpdateByIdSuggestionOutputDtoInterface {
  status: string;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateSuggestionByIdUseCaseInterface {
  execute: (id: string, status: string) => Promise<UpdateByIdSuggestionOutputDtoInterface>;
}
