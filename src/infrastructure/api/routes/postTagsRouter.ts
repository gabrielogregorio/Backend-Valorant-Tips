import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const postTagsRouter = Router();

const { postTagsController } = AppDependencyInjector;

postTagsRouter.post('/', postTagsController.create);
postTagsRouter.get('/', postTagsController.getAll);
