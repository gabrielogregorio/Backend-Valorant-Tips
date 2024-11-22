import { z, ZodSchema } from 'zod';
import { Request } from 'express';
import { errorStates } from '../errors/types';
import { ApiError } from '../errors/ApiError';

export const useValidation = <T extends ZodSchema>(req: Request, schema: T): z.infer<typeof schema> => {
  const validate = schema.safeParse({ body: req.body, params: req.params, query: req.query, data: req.data });

  if (validate?.error) {
    throw new ApiError(errorStates.PAYLOAD_IS_INVALID, validate.error.errors[0].message); // arrumar isso
  }

  return validate.data;
};
