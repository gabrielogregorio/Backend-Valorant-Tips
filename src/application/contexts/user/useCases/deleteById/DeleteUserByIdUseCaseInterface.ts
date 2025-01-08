export interface DeleteUserByIdUseCaseInterface {
  execute: (id: string) => Promise<void>;
}
