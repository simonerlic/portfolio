import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    filetitle: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string())
  })
});

export const collections = { 
  'posts': postsCollection,
};