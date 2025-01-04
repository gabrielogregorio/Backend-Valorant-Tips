import { PostPresenterToHttp } from '@/application/presenters/post';

export interface FindPostByIdOrThrowUseCaseInterface {
  execute: (postId: string) => Promise<PostPresenterToHttp>;
}
