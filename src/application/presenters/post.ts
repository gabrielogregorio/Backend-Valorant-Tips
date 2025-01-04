import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';

export type PostPresenterToHttp = {
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
};

export class PostPresenter {
  static toHTTP(post: PostEntity): PostPresenterToHttp {
    return {
      id: post.id.getValue(),
      title: post.title,
      description: post.description,
      agents: post.agents.map((agent) => ({
        id: agent.id.getValue(),
        imageUrl: agent.imageUrl,
        name: agent.name,
      })),

      maps: post.maps.map((map) => ({
        id: map.id.getValue(),
        imageUrl: map.imageUrl,
        name: map.name,
      })),

      tags: post.tags.map((tag) => ({
        id: tag.id.getValue(),
        name: tag.name,
      })),

      steps: post.steps.map((step) => ({
        id: step.id.getValue(),
        description: step.description,
        imageUrl: step.imageUrl,
      })),

      authors: post.authors.map((author) => ({
        id: author.id.getValue(),
        username: author.username,
        imageUrl: author.imageUrl,
      })),
    };
  }
}
