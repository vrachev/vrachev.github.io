// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    // description: z.string(),
    // author: z.string(),
    // tags: z.array(z.string())
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'notes': notesCollection,
};
