export interface CreateMapUseCaseInterface {
  execute: (
    map: string,
    image: string,
  ) => Promise<{
    id: string;
    name: string;
    image: string;
  }>;
}
