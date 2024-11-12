import express, { Router } from 'express';
import { userAuth } from '@/api/middlewares/userAuth';
import { useValidation } from '@/api/middlewares/useValidation';
import { AppDependencyInjector } from '../container';
import { schemaUpdatePosts } from '../schemas/updatePost.schema';
import { schemaCreatePost } from '../schemas/createPost.schema';

export const postRouter: Router = express.Router();

const { postController } = AppDependencyInjector;

postRouter.post('/', userAuth, useValidation({ body: schemaCreatePost }), postController.createPost as any);
postRouter.put('/:id', userAuth, useValidation({ body: schemaUpdatePosts }), postController.updatePost as any);
postRouter.get('/maps', postController.getMaps);
postRouter.get('/:id', userAuth, postController.get);
postRouter.get('/agents/:map', postController.getAgents);
postRouter.get('/', postController.getPosts);
postRouter.get('/:map/:agent', postController.getPostsByMapAndAgent);
postRouter.delete('/:id', userAuth, postController.delete);
