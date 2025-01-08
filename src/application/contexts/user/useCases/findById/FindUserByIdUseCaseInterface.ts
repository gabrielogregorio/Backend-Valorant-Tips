export interface FindUserByIdOutputDtoInterface {
  username: string;
  imageUrl: string;
}

export interface FindUserByIdUseCaseInterface {
  execute: (id: string) => Promise<FindUserByIdOutputDtoInterface | null>;
}
