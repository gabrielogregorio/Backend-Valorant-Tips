import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const mapsRouter = Router();

const { mapsController } = AppDependencyInjector;

mapsRouter.post('/', mapsController.create);
mapsRouter.get('/', mapsController.getAll);
