import { Montserrat, Sora, Lato, Poppins } from "next/font/google";

/** used in `~/app/layout.tsx` */
export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-montserrat",
});

/** used in
 * 
 * `~/minimal-blog-card/layout.tsx`
 * 
 * `~/testimonial-page/layout.tsx`
 */
export const sora = Sora({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-sora",
});

/** used in `~/business-blog-card/layout.tsx` */
export const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-lato",
});

/** used in `~/business-blog-card/layout.tsx` */
export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-poppins",
});
