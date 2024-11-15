import { errorStateItemType } from '@/infrastructure/api/errors/types';
import { contextType } from '@/infrastructure/api/logs/types';

export class ApiError extends Error {
  error: errorStateItemType;

  context?: contextType;

  constructor(error: errorStateItemType, context?: contextType) {
    super();
    this.error = error;
    this.context = context;
  }
}
