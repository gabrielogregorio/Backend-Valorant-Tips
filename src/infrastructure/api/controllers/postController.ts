import { Request, Response } from 'express';
import { schemaUpdatePosts } from '../schemas/updatePost.schema';
import { schemaCreatePost } from '../schemas/createPost.schema';
import { statusCode } from '../config/statusCode';
import { PostControllerInterface } from './interfaces/PostControllerInterface';
import { CreatePostUseCaseInterface } from '@/application/contexts/post/useCases/create/CreatePostUseCaseInterface';
import { UpdatePostUseCaseInterface } from '@/application/contexts/post/useCases/update/UpdatePostUseCaseInterface';
import { FindPostByIdOrThrowUseCaseInterface } from '@/application/contexts/post/useCases/findByIdOrThrow/IFindPostByIdOrThrowUseCase';
import { FindAvailableMapsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableMaps/FindAvailableMapsUseCaseInterface';
import { FindAvailableAgentsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableAgents/FindAvailableAgentsUseCaseInterface';
import { FindAllPostUseCaseInterface } from '@/application/contexts/post/useCases/findAll/FindAllPostUseCaseInterface';
import { FindAllByMapAndAgentUseCaseInterface } from '@/application/contexts/post/useCases/findAllByMapAndAgent/FindAllByMapAndAgentUseCaseInterface';
import { DeletePostUseCaseInterface } from '@/application/contexts/post/useCases/deleteById/DeletePostUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';

export class PostController implements PostControllerInterface {
  constructor(
    private createPostUseCase: CreatePostUseCaseInterface,
    private updatePostUseCase: UpdatePostUseCaseInterface,
    private findPostByIdOrThrowUseCase: FindPostByIdOrThrowUseCaseInterface,
    private findAvailableMapsUseCase: FindAvailableMapsUseCaseInterface,
    private findAvailableAgentsUseCase: FindAvailableAgentsUseCaseInterface,
    private findAllPostUseCase: FindAllPostUseCaseInterface,
    private findAllByMapAndAgentUseCase: FindAllByMapAndAgentUseCaseInterface,
    private deletePostUseCase: DeletePostUseCaseInterface,
  ) {}

  uploadFile = async (req: Request, res: Response): Promise<Response> => res.json({ filename: req!.file!.path });

  createPost = async (req: Request, res: Response) => {
    const content = useValidation(req, schemaCreatePost);
    const { title, description, tags, imgs } = content.body;
    const userId = req.data.id as string;

    const post = await this.createPostUseCase.execute({ title, description, userId, tags, imgs });

    return res.json({
      id: post.id,
      title: post.title,
      description: post.description,
      tags: post.tags,
      user: {
        username: post.user.username,
        image: post.user.image,
      },
      imgs: post.imgs,
    });
  };

  updatePost = async (req: Request, res: Response): Promise<Response> => {
    const content = useValidation(req, schemaUpdatePosts);

    const { title, description, tags, imgs } = content.body;
    const { id } = content.params;
    const userId = req.data.id as string;

    const post = await this.updatePostUseCase.execute(id, {
      tags,
      title,
      description,
      imgs,
      userId,
    });

    return res.json(post);
  };

  get = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const post = await this.findPostByIdOrThrowUseCase.execute(id);

    return res.json(post);
  };

  getMaps = async (_req: Request, res: Response<{ maps: string[] }>) => {
    const maps = await this.findAvailableMapsUseCase.execute();

    return res.json({ maps });
  };

  getAgents = async (req: Request, res: Response<{ agents: string[] }>) => {
    const agents = await this.findAvailableAgentsUseCase.execute(req.params.map);

    return res.json({ agents });
  };

  getPosts = async (_req: Request, res: Response) => {
    const posts = await this.findAllPostUseCase.execute();

    return res.json({
      posts: posts.map((item) => ({
        id: item.id,
        description: item.description,
        imgs: item.imgs,
        tags: item.tags,
        title: item.title,
        user: item.user,
      })),
    });
  };

  getPostsByMapAndAgent = async (req: Request, res: Response) => {
    const { agent, map } = req.params as { agent: string; map: string };

    const posts = await this.findAllByMapAndAgentUseCase.execute({ agent, map });

    return res.status(statusCode.SUCCESS.code).json({
      posts: posts.map((item) => ({
        id: item.id,
        description: item.description,
        imgs: item.imgs,
        tags: item.tags,
        title: item.title,
        user: item.user,
      })),
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const idPost = req.params.id;
    const userId = req.data.id as string;

    await this.deletePostUseCase.execute(idPost, userId);

    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
