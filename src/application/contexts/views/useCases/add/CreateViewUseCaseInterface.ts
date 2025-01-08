export interface CreateViewUseCaseInterface {
  execute: (ip: string) => Promise<void>;
}
