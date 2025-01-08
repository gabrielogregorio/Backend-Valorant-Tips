export interface CreateUserInputDtoInterface {
  username: string;
  password: string;
  imageUrl?: string;
  name: string;
}

export interface CreateUserOutputDtoInterface {
  id: string;
  username: string;
  imageUrl?: string;
  name: string;
}

export interface CreateUserUseCaseInterface {
  execute: (code: string, payload: CreateUserInputDtoInterface) => Promise<CreateUserOutputDtoInterface>;
}
