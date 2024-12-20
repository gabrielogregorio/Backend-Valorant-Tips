import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const agentsRouter = Router();

const { agentsController } = AppDependencyInjector;

agentsRouter.post('/', agentsController.create);
agentsRouter.get('/', agentsController.getAll);
