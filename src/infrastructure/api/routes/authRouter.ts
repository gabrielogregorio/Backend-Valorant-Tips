import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const authRouter = Router();

const { authController } = AppDependencyInjector;

authRouter.post('/', authController.auth);
