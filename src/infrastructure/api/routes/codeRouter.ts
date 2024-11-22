import { Router } from 'express';

import { userAuthCodeIsCorrect } from '@/infrastructure/api/middlewares/userCodeIsCorrect';
import { AppDependencyInjector } from '../container';


const { codeController } = AppDependencyInjector;

export const codeRouter = Router();

codeRouter.post('/', userAuthCodeIsCorrect, codeController.generate);
