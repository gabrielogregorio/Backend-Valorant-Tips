export interface FindUserByIdOutputDtoInterface {
  username: string;
  image: string;
}

export interface FindUserByIdUseCaseInterface {
  execute: (id: string) => Promise<FindUserByIdOutputDtoInterface | null>;
}
