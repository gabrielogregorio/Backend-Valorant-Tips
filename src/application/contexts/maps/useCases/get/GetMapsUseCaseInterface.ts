export interface GetMapsOutputDtoInterface {
  image: string;
  name: string;
  id: string;
}

export interface GetMapsUseCaseInterface {
  execute: () => Promise<GetMapsOutputDtoInterface[]>;
}
