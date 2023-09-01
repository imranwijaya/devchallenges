import { z } from "zod";

export const inputSize = z.enum(["sm", "md", "lg"]);

export type InputSchema = z.infer<typeof inputSchema>;
export const inputSchema = z.object({
  size: inputSize,
  labelText: z.string().optional(),
  helperText: z.string().optional(),
  startIcon: z.string().optional(),
  endIcon: z.string().optional(),
  hovered: z.boolean().optional(),
  focused: z.boolean().optional(),
  error: z.boolean().optional(),
  fullWidth: z.boolean().optional(),
  row: z.string().optional(),
});
