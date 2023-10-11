import { Montserrat, Sora } from "next/font/google";

/** used in `~/app/layout.tsx` */
export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-montserrat",
});

/** used in `~/minimal-blog-card/layout.tsx` */
export const sora = Sora({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-sora",
});
