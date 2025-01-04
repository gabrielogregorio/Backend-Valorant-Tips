import { z } from 'zod';

export const schemaUpdateUser = z.object({
  body: z.object({
    password: z.string().optional(),
    username: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});
