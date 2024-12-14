// src/application/errors/AppError.ts

import { CodeErrors } from '@/application/errors/types';
import { contextType } from '@/infrastructure/api/logs/types';

export class AppError extends Error {
  public code: CodeErrors;

  public context: contextType;

  constructor(code: CodeErrors, context: contextType) {
    super();
    this.code = code;
    this.context = context;
  }
}
