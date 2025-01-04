// src/application/errors/AppError.ts

import { CodeErrors } from '@/application/errors/types';
import { ContextType } from '@/infrastructure/api/logs/types';

export class AppError extends Error {
  public code: CodeErrors;

  public context: ContextType;

  constructor(code: CodeErrors, context: ContextType) {
    super();
    this.code = code;
    this.context = context;
  }
}
