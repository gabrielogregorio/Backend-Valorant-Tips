import { z } from 'zod';

export const schemaCode = z.object({
  securityCode: z.string(),
});
