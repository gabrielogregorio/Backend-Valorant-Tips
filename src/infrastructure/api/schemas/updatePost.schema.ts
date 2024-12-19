import { z } from 'zod';

export const schemaUpdatePosts = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.object({
      moment: z.string(),
      difficult: z.string(),
      ability: z.string(),
      side: z.string(),
      map: z.string(),
      mapPosition: z.string(),
      agent: z.string(),
    }),
    imgs: z
      .object({
        description: z.string(),
        image: z.string(),
        id: z.string(),
      })
      .array(),
  }),
  params: z.object({
    id: z.string(),
  }),

  data: z.object({
    userId: z.string(),
  }),
});
