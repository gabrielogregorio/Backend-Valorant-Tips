import { Router } from 'express';
import { userAuth } from '@/infrastructure/api/middlewares/userAuth';
import { AppDependencyInjector } from '../container';

export const dashboardRouter = Router();

const { dashboardController } = AppDependencyInjector;

dashboardRouter.get('/', userAuth, dashboardController.get);
