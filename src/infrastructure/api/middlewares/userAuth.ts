import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/envs';
import { errorStates } from '../errors/types';
import { ApiError } from '../errors/ApiError';
import { asyncLocalStorage, StoreModelType } from '@/infrastructure/api/container/globalState';

export const isAuthenticate = (authorization: string) => {
  try {
    const data = jwt.verify(authorization, JWT_SECRET) as any;

    if (data.username === undefined) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
  const authToken = String(req.headers.authorization).split(' ')?.[1]?.trim();
  if (authToken === '' || authToken === undefined) {
    throw new ApiError(errorStates.TOKEN_IS_INVALID_OR_EXPIRED);
  }

  try {
    const data = jwt.verify(authToken, JWT_SECRET) as any;

    req.data = data;

    if (data.username === undefined) {
      throw new ApiError(errorStates.TOKEN_IS_INVALID_OR_EXPIRED, 'no username');
    }

    const oldStore = asyncLocalStorage.getStore() || ({ traceId: '', userId: '' } as StoreModelType);
    asyncLocalStorage.run(
      {
        ...oldStore,
        userId: data.id,
      },
      next,
    );
  } catch (error: any) {
    if (error.message === 'jwt expired') {
      throw new ApiError(errorStates.TOKEN_IS_INVALID_OR_EXPIRED, 'jwt expirated');
    }
    console.log(error);
    throw new ApiError(errorStates.TOKEN_IS_INVALID_OR_EXPIRED, 'unknow error');
  }
};
