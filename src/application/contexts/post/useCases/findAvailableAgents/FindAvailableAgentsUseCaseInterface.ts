export interface FindAvailableAgentsUseCaseInterface {
  execute: (map: string) => Promise<string[]>;
}
