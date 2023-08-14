import {
  Inconsolata,
  Space_Mono,
  Montserrat,
  Crimson_Pro,
  Lora,
  PT_Serif,
  Poppins,
  Playfair_Display,
  Source_Code_Pro,
  Noto_Sans,
} from "next/font/google";

/** used in
 *
 * `~/app/layout.tsx`
 *
 * `~/interior-consultant/layout.tsx`
 *
 * `~/recipe-page/layout.tsx`
 */
export const monsterrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-monsterrat",
});

/** used in `~/404-not-found/layout.tsx` */
export const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
  preload: true,
});
/** used in `~/404-not-found/layout.tsx` */
export const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

/** used in `~/my-team-page/layout.tsx` */
export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
  style: "normal",
});
/** used in `~/my-team-page/layout.tsx` */
export const ptSerif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-serif",
  style: "normal",
});
/** used in `~/interior-consultant/layout.tsx` */
export const crimsonPro = Crimson_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  style: "normal",
});
/** used in `~/interior-consultant/layout.tsx` */
export const lora = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lora",
  style: "normal",
});

/** used in `~/recipe-page/layout.tsx` */
export const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair-display",
  style: "normal",
});

/** used in ~/~/readme/page.tsx */
export const sourceCodePro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  style: "normal",
});

export const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-sans",
  style: "normal",
});
