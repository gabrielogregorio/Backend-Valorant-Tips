import { StatusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';

export interface UpdateByIdSuggestionInputDto {
  email: string;
  description: string;
  postId: string;
}

export interface UpdateByIdSuggestionOutputDto {
  status: StatusSuggestionType;
  email: string;
  description: string;
  id: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateSuggestionByIdUseCaseInterface {
  execute: (id: string, status: StatusSuggestionType) => Promise<UpdateByIdSuggestionOutputDto>;
}
