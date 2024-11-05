import multer from 'multer';
import { Request } from 'express';
import { convertMegabytesToBytes } from '../helpers/conversors';

const LIMIT_SIZE_UPLOAD_IN_BYTES: number = convertMegabytesToBytes(10);

const diskStorage = multer.diskStorage({
  // @ts-ignore
  destination: (_request: Request, _file: any, callback: any) => {
    callback(null, './public/images');
  },
  // @ts-ignore
  filename: (_request: Request, file: any, callback: any) => {
    callback(null, `${file.fieldname}-${Date.now()}`);
  },
});

export const useMulter = multer({
  storage: diskStorage,
  limits: {
    fileSize: LIMIT_SIZE_UPLOAD_IN_BYTES,
  },

  // @ts-ignore
  fileFilter: (_request: Request, file, callback) => {
    const accepted: boolean = !!['image/gif', 'image/png', 'image/webp', 'image/jpg', 'image/jpeg'].find(
      (accept) => accept === file.mimetype,
    );

    return callback(null, accepted);
  },
});
