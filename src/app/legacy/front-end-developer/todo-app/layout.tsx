import type { NextPage } from "next";
import NextLink from "next/link";
import { monsterrat, raleway } from "@/utils/legacy/font";
import { routesObject } from "@/app/legacy/_route";
import BottomNavigation from "@/components/legacy/BottomNavigation";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  const content = routesObject.frontEndDeveloper.child.todoApp;

  return (
    <div
      className={`${monsterrat.className} ${raleway.variable} container relative mx-auto min-h-screen max-w-[90rem] text-[rgba(51,51,51,1)]`}
    >
      <nav className="sticky top-0 z-10 bg-white">
        <div className="px-3 lg:px-20">
          <div className="relative flex h-16 items-center justify-between lg:h-20">
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-shrink-0 items-center">
                <NextLink href="/legacy">
                  <span className="font-raleway text-4xl font-bold -tracking-widest">
                    #todo
                  </span>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="pb-20">{children}</main>
      <footer className="sticky top-[100vh]">
        <p className="py-6 text-center text-sm font-medium text-[#BDBDBD]">
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
      <BottomNavigation
        pageRoute={content?.href as string}
        readmeRoute={content?.readmeHref as string}
        pageComponent={
          <NextLink
            href={content?.readmeHref as string}
            className="group/readme text-white"
          >
            <div className="flex w-full gap-x-2 rounded-full bg-slate-700 p-2">
              <BookOpenIcon className="h-6 w-6" />
              <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                README
              </span>
            </div>
          </NextLink>
        }
        readmeComponent={
          <NextLink
            href={content?.href as string}
            className="group/readme text-white"
          >
            <div className="flex w-full gap-x-2 rounded-full bg-slate-700 p-2">
              <DocumentIcon className="h-6 w-6" />
              <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                Preview
              </span>
            </div>
          </NextLink>
        }
      />
    </div>
  );
};

export default Page;
