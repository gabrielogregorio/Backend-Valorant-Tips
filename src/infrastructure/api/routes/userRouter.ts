import express, { Router } from 'express';
import { AppDependencyInjector } from '../container';
import { userAuth } from '../middlewares/userAuth';

export const userRouter: Router = express.Router();

const { userController } = AppDependencyInjector;

userRouter.post('/', userController.createUser);
userRouter.patch('/', userAuth, userController.updateUser);
userRouter.get('/me', userAuth, userController.get);
userRouter.delete('/', userAuth, userController.delete);
