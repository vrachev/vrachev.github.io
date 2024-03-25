// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  })
});

const thisWeekCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date(),
    lastUpdated: z.date(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'notes': notesCollection,
  'thisweek': thisWeekCollection,
};
