export interface FindUserByIdOutputDto {
  username: string;
  image: string;
}

export interface FindUserByIdUseCaseInterface {
  execute: (id: string) => Promise<FindUserByIdOutputDto | null>;
}
