export interface CreateAgentUseCaseInterface {
  execute: (
    map: string,
    imageUrl: string,
  ) => Promise<{
    id: string;
    name: string;
    imageUrl: string;
  }>;
}
