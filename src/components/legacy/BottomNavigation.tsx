"use client";
import type { NextPage } from "next";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";

type Props = {
  pageRoute: string;
  readmeRoute: string;
  pageComponent: React.ReactNode;
  readmeComponent: React.ReactNode;
  homeTextColor?: string;
  homeBackgroundColor?: string;
};

const BottomNavigation: NextPage<Props> = ({
  pageRoute,
  pageComponent,
  readmeRoute,
  readmeComponent,
  homeTextColor = "text-white",
  homeBackgroundColor = "bg-slate-700",
}) => {
  const currentRoute = usePathname();
  const isPage = currentRoute === pageRoute;
  const isReadme = currentRoute === readmeRoute;

  return (
    <span className="relative">
      <div className="fixed bottom-6 right-6 z-50">
        {isReadme && readmeComponent}
        {isPage && pageComponent}
      </div>
      <div className="fixed bottom-[4.5rem] right-6 z-50">
        <NextLink href="/legacy" className={`group/home ${homeTextColor}`}>
          <div
            className={`flex w-full gap-x-2 rounded-full ${homeBackgroundColor} p-2`}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="hidden transition delay-1000 duration-1000 ease-in lg:group-hover/home:inline lg:group-hover/home:w-full">
              Homepage
            </span>
          </div>
        </NextLink>
      </div>
    </span>
  );
};

export default BottomNavigation;
