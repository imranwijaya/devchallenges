import type { NextPage } from "next";
import NextLink from "next/link";
import NextImage from "next/image";
import { poppins } from "@/utils/font";
import { routesObject } from "@/app/_route";
import BottomNavigation from "@/components/BottomNavigation";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";
import background from "@public/asset/front-end-developer/country-quiz/background.png";

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  const content = routesObject.frontEndDeveloper.child.countryQuiz;

  return (
    <div
      className={`${poppins.className} relative mx-auto flex min-h-screen flex-col`}
    >
      <div className="absolute -z-50 h-full w-full">
        <NextImage
          src={background}
          alt="background image"
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {children}
      <footer className="sticky top-[100vh]">
        <p className="py-6 text-center font-monsterrat text-sm font-medium text-[rgba(242,242,242,1)]">
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
