import { statusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';

export interface CreateSuggestionInputDto {
  email: string;
  description: string;
  postId: string;
}

export interface SuggestionOutputDto {
  status: statusSuggestionType;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSuggestionUseCaseInterface {
  execute: (dto: CreateSuggestionInputDto) => Promise<SuggestionOutputDto>;
}
