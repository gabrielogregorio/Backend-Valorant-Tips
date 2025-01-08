import { NextFunction, Request, Response } from 'express';
// import { errorStates } from '../errors/types';
// import { ApiError } from '../errors/ApiError';

export const useHasFile = (req: Request, _res: Response, next: NextFunction) => {
  // console.log(req.file, 'file');
  // if (!req?.file?.path) {
  //   throw new ApiError(errorStates.PAYLOAD_IS_INVALID, "req.file.path don't exists");
  // }

  next();
};
