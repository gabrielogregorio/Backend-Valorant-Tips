import { z } from 'zod';

export const schemaCreateUser = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
    code: z.string(),
    imageUrl: z.string().optional(),
  }),
});
