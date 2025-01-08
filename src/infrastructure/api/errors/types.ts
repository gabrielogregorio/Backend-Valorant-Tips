export type ErrorStateItemType = {
  name: string;
  code: number;
  message: string;
};

export const errorStates = {
  RESOURCE_NOT_EXISTS: {
    name: 'RESOURCE_NOT_EXISTS',
    code: 404,
    message: 'Resource not exists',
  },
  FORBIDDEN: {
    name: 'FORBIDDEN',
    code: 403,
    message: 'you not have access this',
  },
  PASSWORD_IS_INVALID: {
    name: 'PASSWORD_IS_INVALID',
    code: 401,
    message: 'PASSWORD_IS_INVALID',
  },
  PAYLOAD_IS_INVALID: {
    name: 'PAYLOAD_IS_INVALID',
    code: 400,
    message: 'PAYLOAD_IS_INVALID',
  },
  TOKEN_IS_INVALID_OR_EXPIRED: {
    name: 'TOKEN_IS_INVALID_OR_EXPIRED',
    code: 401,
    message: 'TOKEN_IS_INVALID_OR_EXPIRED',
  },
  INTERNAL_ERROR: {
    name: 'INTERNAL_ERROR',
    code: 500,
    message: 'INTERNAL_ERROR',
  },
  CONFLICT_ALREADY_EXISTS: {
    name: 'CONFLICT_ALREADY_EXISTS',
    code: 409,
    message: 'Resource already exists',
  },
};
