import type { NextPage } from "next";
import { sora } from "@/utils/font";

type Props = { children: React.ReactNode };

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className={`${sora.className} flex min-h-screen flex-col bg-stone-50`}>
      {children}
    </div>
  );
};

export default Layout;
