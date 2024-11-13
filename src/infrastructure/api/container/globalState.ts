import { AsyncLocalStorage } from 'node:async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage<StoreModelType>();
export type StoreModelType = {
  traceId: string;
  userId: string;
};
