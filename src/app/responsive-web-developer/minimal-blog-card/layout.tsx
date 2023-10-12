import type { NextPage } from "next";
import NextLink from "next/link";
import { sora } from "@/utils/font";
import { routesObject } from "@/app/_route";
import FloatingButton from "@/components/FloatingButton";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";

type Props = { children: React.ReactNode };

const Layout: NextPage<Props> = ({ children }) => {
  const content = routesObject.responsiveWebDeveloper.child.minimalBlogCard;

  return (
    <div className="bg-stone-50">
      <div
        className={`${sora.className} flex min-h-screen flex-col 2xl:container 2xl:mx-auto`}
      >
        <main className="flex grow flex-col items-center justify-center p-2">
          {children}
        </main>
        <footer className="sticky top-[100vh]">
          <p className="py-6 text-center font-monsterrat text-sm font-medium text-[#BDBDBD]">
            created by&nbsp;
            <NextLink
              href="https://github.com/imranwijaya"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Github"
            >
              <span className="font-bold underline">imranwijaya</span>
            </NextLink>
            &nbsp;- devChallenges.io
          </p>
        </footer>
        <FloatingButton
          pageRoute={content.href}
          readmeRoute={content.readmeHref}
          pageComponent={
            <NextLink
              href={content.readmeHref}
              className="group/readme text-white"
            >
              <div className="flex w-full items-center gap-x-2 rounded-full border-2 border-slate-700 p-2 text-sm text-slate-700">
                <BookOpenIcon className="h-5 w-5" />
                <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                  README
                </span>
              </div>
            </NextLink>
          }
          readmeComponent={
            <NextLink href={content.href} className="group/readme text-white">
              <div className="flex w-full items-center gap-x-2 rounded-full border-2 border-slate-700 p-2 text-sm text-slate-700">
                <DocumentIcon className="h-5 w-5" />
                <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                  Preview
                </span>
              </div>
            </NextLink>
          }
        />
      </div>
    </div>
  );
};

export default Layout;
