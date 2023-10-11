import { z } from "zod";

export const buttonVariant = z.enum(["default", "outline", "text"]);
export const buttonSize = z.enum(["sm", "md", "lg"]);
export const buttonColor = z.enum([
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
]);

export type ButtonSchema = z.infer<typeof buttonSchema>;
export const buttonSchema = z.object({
  variant: buttonVariant,
  size: buttonSize,
  color: buttonColor,
  startIcon: z.string().optional(),
  endIcon: z.string().optional(),
  disableShadow: z.boolean().optional(),
  hovered: z.boolean().optional(),
  focused: z.boolean().optional(),
});

export type ButtonConfig = z.infer<typeof buttonConfig>;
export const buttonConfig = z.object({
  variant: z.object({
    default: z.string(),
    outline: z.string(),
    text: z.string(),
  }),
  size: z.object({
    default: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
  }),
  color: z.object({
    default: z.string(),
    primary: z.string(),
    secondary: z.string(),
    success: z.string(),
    warning: z.string(),
    danger: z.string(),
  }),
});
