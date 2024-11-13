import { CreatePostBodyType } from '@/infrastructure/api/schemas/createPost.schema';
import { updatePostBodyType } from '@/infrastructure/api/schemas/updatePost.schema';
import { Request, Response } from 'express';

export interface PostControllerInterface {
  uploadFile: (req: Request, res: Response) => Promise<Response>;
  createPost: (req: Request<undefined, undefined, CreatePostBodyType>, res: Response) => Promise<Response>;
  updatePost: (req: Request<undefined, undefined, updatePostBodyType>, res: Response) => Promise<Response>;
  get: (req: Request, res: Response) => Promise<Response>;
  getMaps: (_req: Request, res: Response<{ maps: string[] }>) => Promise<Response>;
  getAgents: (req: Request, res: Response<{ agents: string[] }>) => Promise<Response>;
  getPosts: (_req: Request, res: Response) => Promise<Response>;
  getPostsByMapAndAgent: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
