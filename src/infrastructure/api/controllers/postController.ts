/* eslint-disable max-params */
import { Request, Response } from 'express';
import { CreatePostUseCaseInterface } from '@/application/contexts/post/useCases/create/CreatePostUseCaseInterface';
import { UpdatePostUseCaseInterface } from '@/application/contexts/post/useCases/update/UpdatePostUseCaseInterface';
import { FindPostByIdOrThrowUseCaseInterface } from '@/application/contexts/post/useCases/findByIdOrThrow/IFindPostByIdOrThrowUseCase';
import { FindAvailableMapsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableMaps/FindAvailableMapsUseCaseInterface';
import { FindAvailableAgentsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableAgents/FindAvailableAgentsUseCaseInterface';
import { FindAllPostUseCaseInterface } from '@/application/contexts/post/useCases/findAll/FindAllPostUseCaseInterface';
import { FindAllByMapAndAgentUseCaseInterface } from '@/application/contexts/post/useCases/findAllByMapAndAgent/FindAllByMapAndAgentUseCaseInterface';
import { DeletePostUseCaseInterface } from '@/application/contexts/post/useCases/deleteById/DeletePostUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { PostControllerInterface } from './interfaces/PostControllerInterface';
import { statusCode } from '../config/statusCode';
import { schemaCreatePost } from '../schemas/createPost.schema';
import { schemaUpdatePosts } from '../schemas/updatePost.schema';

export class PostController implements PostControllerInterface {
  constructor(
    private _createPostUseCase: CreatePostUseCaseInterface,
    private _updatePostUseCase: UpdatePostUseCaseInterface,
    private _findPostByIdOrThrowUseCase: FindPostByIdOrThrowUseCaseInterface,
    private _findAvailableMapsUseCase: FindAvailableMapsUseCaseInterface,
    private _findAvailableAgentsUseCase: FindAvailableAgentsUseCaseInterface,
    private _findAllPostUseCase: FindAllPostUseCaseInterface,
    private _findAllByMapAndAgentUseCase: FindAllByMapAndAgentUseCaseInterface,
    private _deletePostUseCase: DeletePostUseCaseInterface,
  ) {}

  createPost = async (req: Request, res: Response) => {
    const content = useValidation(req, schemaCreatePost);
    const { title, description, tagIds, agentIds, mapIds, steps } = content.body;
    const authorId = req.data.userId as string;

    const post = await this._createPostUseCase.execute({
      title,
      description,
      agentIds,
      tagIds,
      authorIds: [authorId],
      mapIds,
      steps,
    });

    return res.json(post);
  };

  updatePost = async (req: Request, res: Response): Promise<Response> => {
    const content = useValidation(req, schemaUpdatePosts);

    const { title, description, agentIds, mapIds, steps, tagIds } = content.body;
    const { id } = content.params;
    const userId = req.data.userId as string;

    const post = await this._updatePostUseCase.execute(id, {
      agentIds,
      authorIds: [userId],
      mapIds,
      steps,
      title,
      tagIds,
      description,
    });

    return res.json(post);
  };

  get = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const post = await this._findPostByIdOrThrowUseCase.execute(id);

    return res.json(post);
  };

  getMaps = async (_req: Request, res: Response<{ maps: string[] }>) => {
    const maps = await this._findAvailableMapsUseCase.execute();

    return res.json({ maps });
  };

  getAgents = async (req: Request, res: Response<{ agents: string[] }>) => {
    const agents = await this._findAvailableAgentsUseCase.execute(req.params.map);

    return res.json({ agents });
  };

  getPosts = async (_req: Request, res: Response) => {
    const posts = await this._findAllPostUseCase.execute();

    return res.json({
      posts,
    });
  };

  getPostsByMapAndAgent = async (req: Request, res: Response) => {
    const { agent, map } = req.params as { agent: string; map: string };

    const posts = await this._findAllByMapAndAgentUseCase.execute({ agent, map });

    return res.status(statusCode.SUCCESS.code).json({
      posts,
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const idPost = req.params.id;
    const userId = req.data.userId as string;

    await this._deletePostUseCase.execute(idPost, userId);

    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
