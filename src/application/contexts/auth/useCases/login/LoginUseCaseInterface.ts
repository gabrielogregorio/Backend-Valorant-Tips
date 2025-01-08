export interface LoginUseCaseInputDtoInterface {
  username: string;
  password: string;
}

export interface LoginUseCaseOutputDtoInterface {
  token: string;
  userId: string;
  expiresAtIso: string;
}

export interface LoginUseCaseInterface {
  execute: (payload: LoginUseCaseInputDtoInterface) => Promise<LoginUseCaseOutputDtoInterface>;
}
