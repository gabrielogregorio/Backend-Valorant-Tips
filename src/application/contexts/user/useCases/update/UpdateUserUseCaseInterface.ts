export interface UpdateUserUseCaseDto {
  username?: string;
  password?: string;
  image?: string;
}

export interface UpdateUserUseCaseInterface {
  execute: (id: string, update: UpdateUserUseCaseDto) => Promise<void>;
}
