export interface CreateCodeOutputDto {
  code: string;
  available: boolean;
  id: string;
}

export interface CreateCodeUseCaseInterface {
  execute: () => Promise<CreateCodeOutputDto>;
}
