export interface CreateUserInputDtoInterface {
  username: string;
  password: string;
  imageUrl?: string;
}

export interface CreateUserOutputDtoInterface {
  id: string;
  username: string;
  imageUrl?: string;
}

export interface CreateUserUseCaseInterface {
  execute: (code: string, payload: CreateUserInputDtoInterface) => Promise<CreateUserOutputDtoInterface>;
}
