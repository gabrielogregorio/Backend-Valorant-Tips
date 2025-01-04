/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/no-redundant-type-constituents */
import { ErrorStateItemType } from '@/infrastructure/api/errors/types';
import { ContextType } from '@/infrastructure/api/logs/types';

export class ApiError extends Error {
  error: ErrorStateItemType;

  context?: ContextType | any;

  constructor(error: ErrorStateItemType, context?: ContextType | any) {
    super();
    this.error = error;
    this.context = context;
  }
}
