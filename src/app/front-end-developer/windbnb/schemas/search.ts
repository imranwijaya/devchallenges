import { z } from "zod";

export type SearchSchema = z.infer<typeof searchSchema>;

export const searchSchema = z.object({
  country: z.string(),
  city: z.string(),
  location: z.object({ country: z.string(), city: z.string() }),
  guest: z.object({
    total: z.number(),
    adult: z.number(),
    children: z.number(),
  }),
});
