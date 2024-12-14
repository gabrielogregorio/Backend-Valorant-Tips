import { z } from 'zod';

export const schemaCode = z.object({
  body: z.object({
    securityCode: z.string(),
  }),
});
