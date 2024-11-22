import { z } from 'zod';

export const schemaCreateSuggestion = z.object({
  body: z.object({
    postId: z.string(),
    email: z.string(),
    description: z.string(),
  }),
});
