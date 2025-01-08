import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import { asyncLocalStorage, StoreModelType } from '@/infrastructure/api/container/globalState';

const SIZE_RANDOM_BYTES = 16;

export const useAddTraceId = (req: Request, _res: Response, next: NextFunction) => {
  const traceId = req.headers['x-request-id'] || crypto.randomBytes(SIZE_RANDOM_BYTES).toString('hex');

  const oldStore = asyncLocalStorage.getStore() || ({ traceId: '', userId: '' } as StoreModelType);
  asyncLocalStorage.run(
    {
      ...oldStore,
      traceId: traceId as string,
    },
    next,
  );
};
