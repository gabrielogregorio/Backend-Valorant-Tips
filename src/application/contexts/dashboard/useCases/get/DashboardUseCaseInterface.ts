export interface DashboardOutputDtoInterface {
  countAll: number;
  countIps: number;
  countAllPosts: number;
  countAlMaps: number;
  countAlAgents: number;
  countAllSuggestions: number;
  countAllUsers: number;
}

export interface DashboardUseCaseInterface {
  execute: () => Promise<DashboardOutputDtoInterface>;
}
