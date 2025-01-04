export interface GetAgentsOutputDtoInterface {
  imageUrl: string;
  name: string;
  id: string;
}

export interface GetAgentsUseCaseInterface {
  execute: () => Promise<GetAgentsOutputDtoInterface[]>;
}
