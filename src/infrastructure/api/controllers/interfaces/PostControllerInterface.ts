import { Request, Response } from 'express';

export interface PostControllerInterface {
  createPost: (req: Request, res: Response) => Promise<Response>;
  updatePost: (req: Request, res: Response) => Promise<Response>;
  get: (req: Request, res: Response) => Promise<Response>;
  getMaps: (_req: Request, res: Response<{ maps: string[] }>) => Promise<Response>;
  getAgents: (req: Request, res: Response<{ agents: string[] }>) => Promise<Response>;
  getPosts: (_req: Request, res: Response) => Promise<Response>;
  getPostsByMapAndAgent: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
