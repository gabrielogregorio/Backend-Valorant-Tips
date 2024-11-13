export interface CreateUserInputDto {
  username: string;
  password: string;
  image?: string;
}

export interface CreateUserUseCaseInterface {
  execute: (code: string, payload: CreateUserInputDto) => Promise<void>;
}
