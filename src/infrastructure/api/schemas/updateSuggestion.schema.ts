import { z } from 'zod';

export const schemaEditSuggestion = z.object({
  body: z.object({
    status: z.enum(['accepted', 'rejected', 'waiting']),
  }),
  params: z.object({
    id: z.string(),
  }),
});
