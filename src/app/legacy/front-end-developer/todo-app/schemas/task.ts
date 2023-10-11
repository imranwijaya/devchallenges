import { z } from "zod";

export type Task = z.infer<typeof taskSchema> & { id: number };
export type TaskSchema = z.infer<typeof taskSchema>;

export const taskSchema = z.object({
  task: z.string().min(1).max(25),
  is_complete: z.boolean().default(false),
});
