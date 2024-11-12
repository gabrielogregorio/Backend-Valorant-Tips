import { formatStackToBeautiful } from '@/utils/formatStackToBeautiful';

type DomainErrorType =
  | 'BusinessRuleViolation'
  | 'NotFound'
  | 'CodeIsNotAvailable'
  | 'OperationNotPermitted'
  | 'CalculationError'
  | 'ImmutableEntity'
  | 'PermissionDenied'
  | 'AlreadyExists';

export class DomainError extends Error {
  public readonly type: DomainErrorType;

  public readonly shortStack: string;

  public readonly details?: Record<string, unknown> | null;

  constructor(type: DomainErrorType, message: string, details?: Record<string, unknown> | null) {
    super(message);

    this.name = 'DomainError';
    this.type = type;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
    this.shortStack = formatStackToBeautiful({
      stack: this.stack,
      maxLengthStack: 10,
    });
  }
}
