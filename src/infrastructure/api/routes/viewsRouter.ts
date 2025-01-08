import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const viewsRouter = Router();

const { viewsController } = AppDependencyInjector;

viewsRouter.post('/', viewsController.create);
viewsRouter.get('/', viewsController.get);
