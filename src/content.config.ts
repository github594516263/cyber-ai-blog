import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['FRONTEND', 'BACKEND', 'AI_PRACTICE', 'LIFE']),
    tags: z.array(z.string()),
    aiSummary: z.string(),
    keyTakeaways: z.array(z.string()).optional(),
    readingTime: z.string().default('5 分钟'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
