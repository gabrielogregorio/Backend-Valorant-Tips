import { AsyncLocalStorage } from 'node:async_hooks';

export type StoreModelType = {
  traceId: string;
  userId: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<StoreModelType>();
