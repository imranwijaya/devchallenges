import type { NextPage } from "next";
import NextLink from "next/link";
import { monsterrat } from "@/utils/font";
import BottomNavigation from "@/components/BottomNavigation";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  return (
    <div className="bg-[#F2F2F2] text-[#4F4F4F]">
      <div
        className={`${monsterrat.className} flex min-h-screen flex-col 2xl:container 2xl:mx-auto`}
      >
        <main className="flex grow flex-col">{children}</main>
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
        <BottomNavigation
          pageRoute="/portfolio"
          readmeRoute="/portfolio/readme"
          pageComponent={
            <NextLink
              href="/portfolio/readme"
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
            <NextLink href="/portfolio" className="group/readme text-white">
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
    </div>
  );
};

export default Page;
