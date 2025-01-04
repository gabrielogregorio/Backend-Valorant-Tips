export interface UpdatePostInputDtoInterface {
  title: string;
  description: string;
  authorIds: string[];
  agentIds: string[];
  mapIds: string[];
  tagIds: string[];
  steps: {
    description: string;
    imageUrl: string;
  }[];
}

export interface UpdatePostOutputDtoInterface {
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

export interface UpdatePostUseCaseInterface {
  execute: (id: string, payload: UpdatePostInputDtoInterface) => Promise<UpdatePostOutputDtoInterface>;
}
