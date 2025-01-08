import { Router, Request, Response } from 'express';
import { API_VERSION } from '../config/envs';

export const baseRouter = Router();

baseRouter.get(
  '/',
  (_req: Request, res: Response): Response =>
    res.json({
      message: `Api Valorant tips running in version ${API_VERSION}`,
    }),
);
