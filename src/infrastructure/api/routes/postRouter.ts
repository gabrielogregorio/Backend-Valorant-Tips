import { Router } from 'express';
import { userAuth } from '@/api/middlewares/userAuth';
import { AppDependencyInjector } from '../container';

export const postRouter: Router = Router();

const { postController } = AppDependencyInjector;

postRouter.post('/', userAuth, postController.createPost);
postRouter.put('/:id', userAuth, postController.updatePost);
postRouter.get('/maps', postController.getMaps);
postRouter.get('/:id', userAuth, postController.get);
postRouter.get('/agents/:map', postController.getAgents);
postRouter.get('/', postController.getPosts);
postRouter.get('/:map/:agent', postController.getPostsByMapAndAgent);
postRouter.delete('/:id', userAuth, postController.delete);
