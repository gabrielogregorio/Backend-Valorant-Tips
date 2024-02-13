import express, { Router } from 'express';
import { userAuth } from '@/middlewares/userAuth';
import { multerUser } from '@/middlewares/multerUser';
import { middlewareValidation } from '@/middlewares/validator';
import { schemaCreateUser } from '@/schemas/createUser';
import { schemaAuth } from '@/schemas/makeAuth';
import { schemaUpdateUser } from '@/schemas/updateUser';
import { DependencyController } from '../container';

export const userRouter: Router = express.Router();

const { userController } = DependencyController;

userRouter.post('/user', middlewareValidation(schemaCreateUser), userController.createUser);
userRouter.post('/userLoadFile', multerUser.single('image'), userController.uploadImage);
userRouter.post('/auth', middlewareValidation(schemaAuth), userController.auth);
userRouter.patch('/user', middlewareValidation(schemaUpdateUser), userAuth, userController.updateUser);
userRouter.get('/user', userAuth, userController.get);
userRouter.delete('/user', userAuth, userController.delete);
