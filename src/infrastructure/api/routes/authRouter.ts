import express from 'express';
import { AppDependencyInjector } from '../container';

export const authRouter = express.Router();

const { authController } = AppDependencyInjector;

authRouter.post('/', authController.auth);
