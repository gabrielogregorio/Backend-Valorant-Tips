export interface LoginUseCaseInputDto {
  username: string;
  password: string;
}

export interface LoginUseCaseOutputDto {
  token: string;
  id: string;
}

export interface LoginUseCaseInterface {
  execute: (payload: LoginUseCaseInputDto) => Promise<LoginUseCaseOutputDto>;
}
