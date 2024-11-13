export interface UpdatePostInputDto {
  title?: string;
  description?: string;
  userId?: string;
  tags?: {
    moment: string;
    difficult: string;
    ability: string;
    side: string;
    map: string;
    mapPosition: string;
    agent: string;
  };
  imgs?: { id: string; description: string; image: string }[];
}

export interface UpdatePostOutputDto {
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

export interface UpdatePostUseCaseInterface {
  execute: (id: string, payload: UpdatePostInputDto) => Promise<UpdatePostOutputDto>;
}
