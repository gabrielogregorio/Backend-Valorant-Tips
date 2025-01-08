/* eslint-disable max-params */
/* eslint-disable @typescript-eslint/naming-convention */
import { AppError } from '@/application/errors/AppError';
import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';
import { Post } from './Post';

export class PostRepository implements PostRepositoryInterface {
  constructor(
    private _agentsRepository: AgentsRepositoryInterface,
    private _mapsRepository: MapsRepositoryInterface,
    private _userRepository: UserRepositoryInterface,
    private _postTagsRepository: PostTagsRepositoryInterface,
  ) {}

  // REMOVE THIS ANY
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async buildPostEntity(post: any): Promise<PostEntity> {
    const [agents, maps, authors, tags] = await Promise.all([
      this._agentsRepository.findByIds(post.agentIds),
      this._mapsRepository.findByIds(post.mapIds),
      this._userRepository.findByIds(post.authorIds),
      this._postTagsRepository.findByIds(post.tagIds),
    ]);

    const postEntityUpdated = PostEntity.restore({
      id: post.id.getValue(),
      title: post.title,
      description: post.description,
      isPublished: post.isPublished,
      createdAt: post.createdAt,
      isDeleted: post.isDeleted,
      updateAt: post.updateAt,
      agents,
      authors,
      tags,
      maps,
      // @ts-ignore
      steps: post.steps.map((step) => ({
        description: step.description,
        id: step.id,
        imageUrl: step.imageUrl,
      })),
    });

    return postEntityUpdated;
  }

  // muita duplicação
  save = async (post: PostEntity): Promise<PostEntity> => {
    const newPost = new Post({
      description: post.description,
      id: post.id.getValue(),
      agentIds: post.agents.map((agent) => agent.id.getValue()),
      authorIds: post.authors.map((author) => author.id.getValue()),
      createdAt: post.createdAt,
      tagIds: post.tags.map((tag) => tag.id.getValue()),
      isDeleted: post.isDeleted,
      title: post.title,
      mapIds: post.maps.map((map) => map.id.getValue()),
      steps: post.steps.map((step) => ({
        id: step.id,
        description: step.description,
        imageUrl: step.imageUrl,
      })),
    });
    const postSaved = await newPost.save();

    return this.buildPostEntity(postSaved);
  };

  update = async (post: PostEntity): Promise<PostEntity> => {
    const updatePost = {
      description: post.description,
      id: post.id.getValue(),
      agentIds: post.agents.map((agent) => agent.id.getValue()),
      authorIds: post.authors.map((author) => author.id.getValue()),
      createdAt: post.createdAt,
      tagIds: post.tags.map((tag) => tag.id.getValue()),
      isDeleted: post.isDeleted,
      title: post.title,
      mapIds: post.maps.map((map) => map.id.getValue()),
      steps: post.steps.map((step) => ({
        id: step.id,
        description: step.description,
        imageUrl: step.imageUrl,
      })),
    };

    const postUpdated = await Post.findOneAndUpdate({ id: post.id.getValue() }, { $set: updatePost }, { new: true });
    if (!postUpdated) {
      throw new AppError('POST_NOT_EXISTS', { postId: post.id.getValue() });
    }

    return this.buildPostEntity(postUpdated);
  };

  findById = async (id: string): Promise<PostEntity | null> => {
    const post = await Post.findOne({ id });

    if (!post) {
      return null;
    }

    return this.buildPostEntity(post);
  };

  findAvailableMaps = async (): Promise<string[]> => Post.find().distinct('tags.map');

  findAvailableAgents = async (map: string): Promise<string[]> => Post.find({ 'tags.map': map }).distinct('tags.agent');

  findAll = async (): Promise<PostEntity[]> => {
    const posts = await Post.find({}, null, {
      sort: {
        updatedAt: -1,
      },
    });

    return Promise.all(posts.map(async (postItem) => this.buildPostEntity(postItem)));
  };

  findAllByMapAndAgent = async (agent: string, map: string): Promise<PostEntity[]> => {
    const posts = await Post.find({ 'tags.agent': agent, 'tags.map': map }, null, { sort: { updatedAt: -1 } });

    return Promise.all(posts.map(async (postItem) => this.buildPostEntity(postItem)));
  };

  deleteById = async (id: string): Promise<void> => {
    await Post.findOneAndDelete({ id });
  };

  countAll = async (): Promise<number> => Post.countDocuments({});

  findMaps = async (): Promise<string[]> => Post.find().distinct('tags.map');

  findAgents = async (): Promise<string[]> => Post.find().distinct('tags.agent');
}
