export interface FindByMapAndAgentInputDtoInterface {
  agent: string;
  map: string;
}

export interface FindByMapAndAgentOutputDtoInterface {
  id: string;
  title: string;
  description: string;
  user: {
    username: string;
    image: string;
  };
  tags: {
    moment: string;
    difficult: string;
    ability: string;
    side: string;
    map: string;
    mapPosition: string;
    agent: string;
  };
  imgs: { id: string; description: string; image: string }[];
}

export interface FindAllByMapAndAgentUseCaseInterface {
  execute: (payload: FindByMapAndAgentInputDtoInterface) => Promise<FindByMapAndAgentOutputDtoInterface[]>;
}
