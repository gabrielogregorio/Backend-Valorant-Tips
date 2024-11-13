export interface GetViewsOutputDto {
  countAll: number;
  countIps: number;
}

export interface GetViewUseCaseInterface {
  execute: () => Promise<GetViewsOutputDto>;
}
