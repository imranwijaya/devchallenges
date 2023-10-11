import "./globals.css";
// import "./nprogress.css";
import type { NextPage } from "next";
import { montserrat } from "@/utils/font";
// import ProgressBar from "@/components/ProgressBar";

type Props = { children: React.ReactNode };

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
        {/* <ProgressBar /> */}
      </body>
    </html>
  );
};

export default RootLayout;
