// src/application/errors/AppError.ts

import { codeErrors } from '@/application/errors/types';
import { contextType } from '@/infrastructure/api/logs/types';

export class AppError extends Error {
  public code: codeErrors;
  public context: contextType;

  constructor(code: codeErrors, context: contextType) {
    super();
    this.code = code;
    this.context = context;
  }
}
