import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['AI_AGENT', 'LLM_ARCH', 'CYBER_UI', 'EDGE_COMPUTE', 'NEURAL_THOUGHTS']),
    tags: z.array(z.string()),
    aiSummary: z.string(),
    keyTakeaways: z.array(z.string()).optional(),
    aiModel: z.string().default('CORTEX-Ω v4.8'),
    confidence: z.number().min(0).max(100).default(98.4),
    readingTime: z.string().default('6 MIN'),
    featured: z.boolean().default(false),
    serialCode: z.string().default('LOG-2026-X'),
  }),
});

export const collections = { blog };
