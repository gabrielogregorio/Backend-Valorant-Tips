import { PostEntity } from '../../../../domain/post/entity/post';
import { PostAggregateRepositoryInterface } from '../../../../domain/post/repository/postRepository.interface';
import { Post } from './Post';

export class PostRepository implements PostAggregateRepositoryInterface {
  save = async (post: PostEntity): Promise<void> => {
    const newPost = new Post({
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      user: post.userId,
      id: post.id,
    });
    await newPost.save();
  };

  update = async (post: PostEntity): Promise<PostEntity> => {
    const updatePost = {
      description: post.description,
      imgs: post.imgs,
      tags: post.tags,
      title: post.title,
      user: post.userId,
      id: post.id,
    };

    const postUpdated = await Post.findOneAndUpdate({ id: post.id }, { $set: updatePost }, { new: true });
    if (!postUpdated) {
      throw new Error('Post not exists');
    }

    const postEntityUpdated = new PostEntity({
      title: postUpdated.title,
      id: postUpdated.id.toString(),
      userId: postUpdated.user.id.toString(),
    });

    postEntityUpdated.changeDescription(postUpdated.description);
    postEntityUpdated.changeImgs(postUpdated.imgs);
    postEntityUpdated.changeTags(postUpdated.tags);

    return postEntityUpdated;
  };

  findById = async (id: string): Promise<PostEntity | null> => {
    const post = await Post.findById(id);

    if (!post) {
      return null;
    }

    return new PostEntity({
      title: post.title,
      tags: post.tags,
      imgs: post.imgs,
      description: post.description,
      userId: post.user.id.toString() || '',
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

    return posts.map(
      (postItem) =>
        new PostEntity({
          title: postItem.title,
          tags: postItem.tags,
          imgs: postItem.imgs,
          description: postItem.description,
          userId: postItem.user.id.toString() || '',
          id: postItem.id,
        }),
    );
  };

  findAllByMapAndAgent = async (agent: string, map: string): Promise<PostEntity[]> => {
    const posts = await Post.find({ 'tags.agent': agent, 'tags.map': map }, null, { sort: { updatedAt: -1 } }).populate(
      'user',
    );

    return posts.map(
      (postItem) =>
        new PostEntity({
          title: postItem.title,
          tags: postItem.tags,
          imgs: postItem.imgs,
          description: postItem.description,
          userId: postItem.user.id.toString() || '',
          id: postItem.id,
        }),
    );
  };

  deleteById = async (id: string): Promise<any> => Post.findOneAndDelete({ id });

  countAll = async (): Promise<any> => Post.countDocuments({});

  findMaps = async (): Promise<any> => Post.find().distinct('tags.map');

  findAgents = async (): Promise<any> => Post.find().distinct('tags.agent');
}