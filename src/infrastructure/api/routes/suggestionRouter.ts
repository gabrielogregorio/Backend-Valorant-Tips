import { userAuth } from '@/api/middlewares/userAuth';
import { Router } from 'express';
import { AppDependencyInjector } from '../container';

export const suggestionRouter = Router();

const { suggestionController } = AppDependencyInjector;

suggestionRouter.post('/', suggestionController.createSuggestion);
suggestionRouter.get('/', userAuth, suggestionController.getSuggestions);
suggestionRouter.put('/:id', userAuth, suggestionController.editSuggestion);
suggestionRouter.delete('/:id', userAuth, suggestionController.delete);
