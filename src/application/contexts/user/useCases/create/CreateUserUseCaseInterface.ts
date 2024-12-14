export interface CreateUserInputDtoInterface {
  username: string;
  password: string;
  image?: string;
}

export interface CreateUserUseCaseInterface {
  execute: (code: string, payload: CreateUserInputDtoInterface) => Promise<void>;
}
