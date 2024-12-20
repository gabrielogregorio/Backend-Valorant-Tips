export interface GetAgentsOutputDtoInterface {
  image: string;
  name: string;
  id: string;
}

export interface GetAgentsUseCaseInterface {
  execute: () => Promise<GetAgentsOutputDtoInterface[]>;
}
