import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import { asyncLocalStorage, StoreModelType } from '@/infrastructure/api/container/globalState';

export const useAddTraceId = (req: Request, _res: Response, next: NextFunction) => {
  const traceId = req.headers['x-request-id'] || crypto.randomBytes(16).toString('hex');

  const oldStore = asyncLocalStorage.getStore() || ({ traceId: '', userId: '' } as StoreModelType);
  asyncLocalStorage.run(
    {
      ...oldStore,
      traceId: traceId as string,
    },
    next,
  );
};
