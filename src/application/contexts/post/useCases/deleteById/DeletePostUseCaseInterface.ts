export interface DeletePostUseCaseInterface {
  execute: (idPost: string, userId: string) => Promise<void>;
}
