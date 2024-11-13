export interface FindPostByIdOrThrowUseCaseOutputDto {
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

export interface FindPostByIdOrThrowUseCaseInterface {
  execute: (postId: string) => Promise<FindPostByIdOrThrowUseCaseOutputDto>;
}
