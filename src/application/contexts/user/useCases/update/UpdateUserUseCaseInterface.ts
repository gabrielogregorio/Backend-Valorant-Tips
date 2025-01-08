export interface UpdateUserUseCaseDtoInterface {
  username?: string;
  password?: string;
  imageUrl?: string;
}

export interface UpdateUserUseCaseInterface {
  execute: (id: string, update: UpdateUserUseCaseDtoInterface) => Promise<void>;
}
