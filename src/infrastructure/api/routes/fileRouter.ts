import express, { Router } from 'express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '@/api/config/envs';
import { useHasFile } from '@/api/middlewares/useHasFile';
import { convertMegabytesToBytes } from '@/api/helpers/conversors';
import { AppDependencyInjector } from '../container';
import { userAuth } from '@/infrastructure/api/middlewares/userAuth';

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: 'tips',
  } as any,
});

const LIMIT_SIZE_UPLOAD_IN_BYTES = convertMegabytesToBytes(10);
const upload = multer({
  // @ts-ignore
  // storage,
  dest: 'public/files/',
  // limits: {
  //   fileSize: LIMIT_SIZE_UPLOAD_IN_BYTES,
  // },
});

export const fileRouter: Router = express.Router();

const { postController } = AppDependencyInjector;

// @ts-ignore
fileRouter.post('/', userAuth, upload.single('image'), useHasFile, postController.uploadFile);
