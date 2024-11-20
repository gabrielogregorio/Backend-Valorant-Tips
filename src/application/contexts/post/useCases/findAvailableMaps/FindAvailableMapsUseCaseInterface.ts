export interface FindAvailableMapsUseCaseInterface {
  execute: () => Promise<string[]>;
}
