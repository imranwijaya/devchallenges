import { Montserrat } from "next/font/google";

/** used in `~/app/layout.tsx` */
export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-montserrat",
});
