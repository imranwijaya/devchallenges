import { z } from "zod";

export type CountrySchema = z.infer<typeof countrySchema>;

export const countrySchema = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z
      .record(
        z.string(),
        z.object({ official: z.string(), common: z.string() }),
      )
      .optional(),
  }),
  tld: z.array(z.string()).optional(),
  cca2: z.string(),
  ccn3: z.string().optional(),
  cca3: z.string(),
  cioc: z.string().optional(),
  independent: z.boolean().optional(),
  status: z.string(),
  unMember: z.boolean(),
  currencies: z
    .record(
      z.string(),
      z.object({ name: z.string(), symbol: z.string().optional() }),
    )
    .optional(),
  idd: z
    .object({
      root: z.string().optional(),
      suffixes: z.array(z.string()).optional(),
    })
    .optional(),
  capital: z.array(z.string()).optional(),
  altSpellings: z.array(z.string()),
  region: z.string(),
  subregion: z.string().optional(),
  languages: z.record(z.string(), z.string()).optional(),
  translations: z.record(
    z.string(),
    z.object({ official: z.string(), common: z.string() }),
  ),
  latlng: z.array(z.number()),
  landlocked: z.boolean(),
  borders: z.array(z.string()).optional(),
  area: z.number(),
  demonyms: z
    .record(z.string(), z.object({ f: z.string(), m: z.string() }))
    .optional(),
  flag: z.string(),
  maps: z.object({ googleMaps: z.string(), openStreetMaps: z.string() }),
  population: z.number(),
  gini: z.record(z.string(), z.number()).optional(),
  fifa: z.string().optional(),
  car: z.object({ signs: z.array(z.string()).optional(), side: z.string() }),
  timezones: z.array(z.string()),
  continents: z.array(z.string()),
  flags: z.object({ png: z.string(), svg: z.string() }),
  coatOfArms: z
    .object({ png: z.string().optional(), svg: z.string().optional() })
    .optional(),
  startOfWeek: z.string(),
  capitalInfo: z.object({ latlng: z.array(z.number()).optional() }).optional(),
  postalCode: z
    .object({ format: z.string(), regex: z.string().optional() })
    .optional(),
});
