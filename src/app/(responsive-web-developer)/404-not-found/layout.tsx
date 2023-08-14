import type { NextPage } from "next";
import NextLink from "next/link";
import { spaceMono, inconsolata } from "@/utils/font";
import BottomNavigation from "@/components/BottomNavigation";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  return (
    <div
      className={`${spaceMono.className} ${inconsolata.variable} flex min-h-screen flex-col 2xl:container 2xl:mx-auto`}
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
        pageRoute="/404-not-found"
        readmeRoute="/404-not-found/readme"
        pageComponent={
          <NextLink
            href="/404-not-found/readme"
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
          <NextLink href="/404-not-found" className="group/readme text-white">
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
