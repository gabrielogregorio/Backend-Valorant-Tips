import { AppError } from '@/application/errors/AppError';
import { Post } from './Post';
import { IPost } from '@/infrastructure/api/interfaces/post';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';

export class PostRepository implements PostRepositoryInterface {
  private imageMongoToImageApplication(images: IPost['imgs'][0][]): IPost['imgs'] {
    return images.map((image) => ({
      description: image.description,
      id: image.id,
      image: image.image,
    }));
  }

  save = async (post: PostEntity): Promise<void> => {
    const newPost = new Post({
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      userId: post.userId.getValue(),
      id: post.id.getValue(),
    });
    await newPost.save();
  };

  update = async (post: PostEntity): Promise<PostEntity> => {
    const updatePost = {
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      userId: post.userId.getValue(),
      id: post.id.getValue(),
    };

    const postUpdated = await Post.findOneAndUpdate({ id: post.id }, { $set: updatePost }, { new: true });
    if (!postUpdated) {
      throw new AppError('POST_NOT_EXISTS', { postId: post.id.getValue() });
    }

    const postEntityUpdated = PostEntity.restore({
      title: postUpdated.title,
      id: postUpdated.id.toString(),
      userId: postUpdated.userId,
    });

    postEntityUpdated.changeDescription(postUpdated.description);
    postEntityUpdated.changeImgs(this.imageMongoToImageApplication(postUpdated.imgs));
    postEntityUpdated.changeTags(postUpdated.tags);

    return postEntityUpdated;
  };

  findById = async (id: string): Promise<PostEntity | null> => {
    const post = await Post.findOne({ id });

    if (!post) {
      return null;
    }

    return PostEntity.restore({
      title: post.title,
      tags: post.tags,
      imgs: this.imageMongoToImageApplication(post.imgs),
      description: post.description,
      userId: post.userId || '',
      id: post.id,
    });
  };

  findAvailableMaps = async (): Promise<string[]> => Post.find().distinct('tags.map');

  findAvailableAgents = async (map: string): Promise<string[]> => Post.find({ 'tags.map': map }).distinct('tags.agent');

  findAll = async (): Promise<PostEntity[]> => {
    const posts = await Post.find({}, null, {
      sort: {
        updatedAt: -1,
      },
    });

    return posts.map((postItem) =>
      PostEntity.restore({
        title: postItem.title,
        tags: postItem.tags,
        imgs: this.imageMongoToImageApplication(postItem.imgs),
        description: postItem.description,
        userId: postItem.userId || '',
        id: postItem.id.toString(),
      }),
    );
  };

  findAllByMapAndAgent = async (agent: string, map: string): Promise<PostEntity[]> => {
    const posts = await Post.find({ 'tags.agent': agent, 'tags.map': map }, null, { sort: { updatedAt: -1 } });

    return posts.map((postItem) =>
      PostEntity.restore({
        title: postItem.title,
        tags: postItem.tags,
        imgs: this.imageMongoToImageApplication(postItem.imgs),
        description: postItem.description,
        userId: postItem.userId.toString() || '',
        id: postItem.id,
      }),
    );
  };

  deleteById = async (id: string): Promise<any> => Post.findOneAndDelete({ id });

  countAll = async (): Promise<any> => Post.countDocuments({});

  findMaps = async (): Promise<any> => Post.find().distinct('tags.map');

  findAgents = async (): Promise<any> => Post.find().distinct('tags.agent');
}
