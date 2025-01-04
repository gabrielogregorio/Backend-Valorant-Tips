/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from 'express';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '@/api/config/envs';
import { useHasFile } from '@/api/middlewares/useHasFile';
import { convertMegabytesToBytes } from '@/api/helpers/conversors';
import { userAuth } from '@/infrastructure/api/middlewares/userAuth';
import { AppDependencyInjector } from '../container';

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinaryV2,
//   params: {
//     folder: 'tips',
//   } as any,
// });

// eslint-disable-next-line sonarjs/content-length
const storage = multer.memoryStorage();

const LIMIT_SIZE_UPLOAD_IN_BYTES = convertMegabytesToBytes(5);
const upload = multer({
  // @ts-ignore
  storage,
  dest: 'public/files/',
  limits: {
    fileSize: LIMIT_SIZE_UPLOAD_IN_BYTES,
  },
  fileFilter: (_req, file, callback) => {
    const allowedTypes = /jpeg|jpg|png/;
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype) {
      callback(null, true);
    } else {
      callback(new Error('formato inválido'));
    }
  },
});

export const imageRouter: Router = Router();

const { imagesController } = AppDependencyInjector;

// @ts-ignore
imageRouter.post('/', userAuth, upload.single('image'), useHasFile, imagesController.create);
