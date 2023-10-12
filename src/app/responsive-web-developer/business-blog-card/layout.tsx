import type { NextPage } from "next";
import { lato, poppins } from "@/utils/font";
import { routesObject } from "@/app/_route";

type Props = { children: React.ReactNode };

const Layout: NextPage<Props> = ({ children }) => {
  const content = routesObject.responsiveWebDeveloper.child.businessBlogCard;

  return (
    <div className="bg-[rgba(242,245,249,1)]">
      <div
        className={`${lato.className} ${poppins.variable} flex min-h-screen flex-col 2xl:container 2xl:mx-auto`}
      >
        <main className="flex grow flex-col items-center justify-center p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
