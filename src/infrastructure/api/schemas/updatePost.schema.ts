import { z } from 'zod';

export const schemaUpdatePosts = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),

    agentIds: z.string().array(),
    tagIds: z.string().array(),
    mapIds: z.string().array(),

    steps: z
      .object({
        description: z.string(),
        imageUrl: z.string(),
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
