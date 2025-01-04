export interface FindAllPostOutputDtoInterface {
  id: string;
  title: string;
  description: string;
  agents: {
    id: string;
    imageUrl: string;
    name: string;
  }[];

  maps: {
    id: string;
    imageUrl: string;
    name: string;
  }[];

  tags: {
    id: string;
    name: string;
  }[];

  steps: {
    id: string;
    description: string;
    imageUrl: string;
  }[];

  authors: {
    id: string;
    username: string;
    imageUrl: string;
  }[];
}

export interface FindAllPostUseCaseInterface {
  execute: () => Promise<FindAllPostOutputDtoInterface[]>;
}
