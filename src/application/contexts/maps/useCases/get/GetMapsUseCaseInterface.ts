// presenter?
export interface GetMapsOutputDtoInterface {
  imageUrl: string;
  name: string;
  id: string;
}

export interface GetMapsUseCaseInterface {
  execute: () => Promise<GetMapsOutputDtoInterface[]>;
}
