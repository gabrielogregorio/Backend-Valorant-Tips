import express, { Router } from 'express';
import { userAuth } from '@/api/middlewares/userAuth';
import { AppDependencyInjector } from '../container';

export const postRouter: Router = express.Router();

const { postController } = AppDependencyInjector;

postRouter.post('/', userAuth, postController.createPost as any);
postRouter.put('/:id', userAuth, postController.updatePost as any);
postRouter.get('/maps', postController.getMaps);
postRouter.get('/:id', userAuth, postController.get);
postRouter.get('/agents/:map', postController.getAgents);
postRouter.get('/', postController.getPosts);
postRouter.get('/:map/:agent', postController.getPostsByMapAndAgent);
postRouter.delete('/:id', userAuth, postController.delete);
