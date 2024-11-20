import { statusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';

export interface FindAllSuggestionsOutputDto {
  status: statusSuggestionType;
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
