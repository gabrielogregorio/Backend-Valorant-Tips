import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const postTagCategoryRouter = Router();

const { postTagCategoryController } = AppDependencyInjector;

postTagCategoryRouter.post('/', postTagCategoryController.create);
postTagCategoryRouter.get('/', postTagCategoryController.getAll);
