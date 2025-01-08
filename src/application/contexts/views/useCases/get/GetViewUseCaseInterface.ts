export interface GetViewsOutputDtoInterface {
  countAll: number;
  countIps: number;
}

export interface GetViewUseCaseInterface {
  execute: () => Promise<GetViewsOutputDtoInterface>;
}
