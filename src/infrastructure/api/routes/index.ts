import express, { Router } from 'express';
import { imageRouter } from '@/infrastructure/api/routes/imagesRouter';
import { agentsRouter } from '@/infrastructure/api/routes/agentsRouter';
import { postTagCategoryRouter } from '@/infrastructure/api/routes/postTagCategoryRouter';
import { postTagsRouter } from '@/infrastructure/api/routes/postTagsRouter';
import { baseRouter } from './baseRouter';
import { authRouter } from './authRouter';
import { codeRouter } from './codeRouter';
import { dashboardRouter } from './dashboardRouter';
import { postRouter } from './postRouter';
import { suggestionRouter } from './suggestionRouter';
import { userRouter } from './userRouter';
import { viewsRouter } from './viewsRouter';
import { mapsRouter } from './mapsRouter';

export const router = Router();

router.use(express.static('public'));

router.use('/', baseRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/uploadImage', imageRouter);
router.use('/auth', authRouter);
router.use('/suggestions', suggestionRouter);
router.use('/code', codeRouter);
router.use('/dashboards', dashboardRouter);
router.use('/views', viewsRouter);
router.use('/maps', mapsRouter);
router.use('/agents', agentsRouter);
router.use('/category', postTagCategoryRouter);
router.use('/tags', postTagsRouter);
