import type { NextPage } from "next";
import NextLink from "next/link";
import { monsterrat, crimsonPro, lora } from "@/utils/font";
import Navbar from "./components/Navbar";
import BottomNavigation from "@/components/BottomNavigation";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { routesObject } from "@/app/_route";

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  const content = routesObject.responsiveWebDeveloper.child.interiorConsultant;
  return (
    <div className="bg-[#181719] text-white">
      <div
        className={`${monsterrat.className} ${crimsonPro.variable} ${lora.variable} container relative mx-auto min-h-screen max-w-[90rem]`}
      >
        <Navbar />
        <main className="pb-20">{children}</main>
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
          pageRoute={content.href}
          readmeRoute={content.readmeHref}
          pageComponent={
            <NextLink
              href={content.readmeHref}
              className="group/readme text-[#181719]"
            >
              <div className="flex w-full gap-x-2 rounded-full bg-[#828282] p-2">
                <BookOpenIcon className="h-6 w-6" />
                <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                  README
                </span>
              </div>
            </NextLink>
          }
          readmeComponent={
            <NextLink
              href={content.href}
              className="group/readme text-[#181719]"
            >
              <div className="flex w-full gap-x-2 rounded-full bg-[#828282] p-2">
                <DocumentIcon className="h-6 w-6" />
                <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/readme:inline lg:group-hover/readme:w-full">
                  Preview
                </span>
              </div>
            </NextLink>
          }
          homeBackgroundColor="bg-[#828282]"
          homeTextColor="text-[#181719]"
        />
      </div>
    </div>
  );
};

export default Page;
