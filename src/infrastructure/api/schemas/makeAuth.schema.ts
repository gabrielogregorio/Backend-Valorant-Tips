import { z } from 'zod';

export const schemaAuth = z.object({
  body: z.object({
    password: z.string(),
    username: z.string(),
  }),
  query: z.any(),
  params: z.any(),
});
