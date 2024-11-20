export interface LoginUseCaseInputDto {
  username: string;
  password: string;
}

export interface LoginUseCaseOutputDto {
  token: string;
  userId: string;
}

export interface LoginUseCaseInterface {
  execute: (payload: LoginUseCaseInputDto) => Promise<LoginUseCaseOutputDto>;
}
