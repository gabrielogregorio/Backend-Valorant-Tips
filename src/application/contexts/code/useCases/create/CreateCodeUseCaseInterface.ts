export interface CreateCodeOutputDtoInterface {
  code: string;
  available: boolean;
  id: string;
}

export interface CreateCodeUseCaseInterface {
  execute: () => Promise<CreateCodeOutputDtoInterface>;
}
