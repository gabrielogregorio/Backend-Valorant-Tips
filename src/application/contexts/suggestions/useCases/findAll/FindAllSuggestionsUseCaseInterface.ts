import { StatusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';

export interface FindAllSuggestionsOutputDto {
  status: StatusSuggestionType;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FindAllSuggestionsUseCaseInterface {
  execute: () => Promise<FindAllSuggestionsOutputDto[]>;
}
