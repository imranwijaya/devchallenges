import type { StaticImageData } from "next/image";
import { z } from "zod";

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
export type Currencies = z.infer<typeof currencies>;
export type Countries = typeof countries;

export const currencies = z.enum(["USD", "IDR"]);

export const countries = [
  { code: "CN", name: "China" },
  { code: "ID", name: "Indonesia" },
  { code: "RU", name: "Russia" },
  { code: "US", name: "United States" },
];

export const countryCodes = z.enum(["CN", "ID", "RU", "US"]);

export const countryNames = z.enum([
  "China",
  "Indonesia",
  "Russia",
  "United States",
]);

export const checkoutSchema = z.object({
  cart: z.object({
    items: z
      .array(
        z.object({
          name: z.string().min(1),
          image: z.string().min(1).or(z.custom<StaticImageData>()),
          currency: currencies,
          initial_price: z.number().positive(),
          final_price: z.number().positive(),
          quantity: z.number().positive(),
          total_price: z.number().positive(),
        }),
      )
      .nonempty(),
    total_price: z.number().positive(),
    shipping_price: z.number().positive(),
    grand_total_price: z.number().positive(),
  }),
  contact: z.object({
    email: z.string().email(),
    phone_number:
      typeof window === "undefined"
        ? z.null()
        : z.string().regex(/^\d+$/).min(8),
  }),
  shipping: z.object({
    full_name: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    country: typeof window === "undefined" ? z.null() : countryNames,
    postal_code:
      typeof window === "undefined"
        ? z.null()
        : z.string().regex(/^\d+$/).min(3),
  }),
  save_information: z.boolean().default(false),
});
