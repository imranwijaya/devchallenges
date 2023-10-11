import type { NextPage } from "next";
import NextLink from "next/link";
import { sora } from "@/utils/font";
import { routesObject } from "@/app/_route";

type Props = { children: React.ReactNode };

const Layout: NextPage<Props> = ({ children }) => {
  const content = routesObject.responsiveWebDeveloper.child.minimalBlogCard;

  return (
    <div className="bg-stone-50">
      <div
        className={`${sora.className} flex min-h-screen flex-col 2xl:container 2xl:mx-auto`}
      >
        <main className="flex grow flex-col items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
