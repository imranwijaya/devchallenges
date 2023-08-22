import type { NextPage } from "next";
import NextLink from "next/link";
import { poppins, heebo } from "@/utils/font";
import BottomNavigation from "@/components/BottomNavigation";
import Navbar from "./components/Navbar";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./components/Icon";

type Menu = {
  name: string;
  href: string;
  exact: boolean;
  child: Menu[];
};

export const menus: Menu[] = [
  {
    name: "Home",
    href: "/edie-homepage",
    exact: true,
    child: [],
  },
  {
    name: "Services",
    href: "/edie-homepage/#services",
    exact: true,
    child: [],
  },
  {
    name: "Our Works",
    href: "/edie-homepage/#our-works",
    exact: true,
    child: [],
  },
  {
    name: "Clients",
    href: "/edie-homepage/#clients",
    exact: true,
    child: [],
  },
  {
    name: "Contact",
    href: "/edie-homepage/#contact",
    exact: true,
    child: [],
  },
];

type Props = { children: React.ReactNode };

const Page: NextPage<Props> = ({ children }) => {
  return (
    <div
      className={`${poppins.className} ${heebo.variable}  relative mx-auto min-h-screen `}
    >
      <Navbar />
      <main className="container mx-auto max-w-[90rem] pb-20 text-[#333333]">
        {children}
      </main>
      <footer className="sticky top-[100vh] bg-[#100E1D] text-[#F2F2F2]">
        <div className="container mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-y-16 px-10 py-9 md:px-16 lg:flex-row lg:justify-between lg:px-36 lg:py-12">
            <ul className="space-y-2">
              {menus.map((e, idx) => (
                <li key={idx} className="group block">
                  <NextLink
                    href={e.href}
                    className="cursor-pointer py-1  group-hover:text-[#2D9CDB]"
                  >
                    {e.name}
                  </NextLink>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <div className="font-heebo text-4xl font-extrabold text-[#F2F2F2]">
                Edie
              </div>
              <div className="flex gap-x-2">
                <NextLink href="/edie-homepage" title="Instagram">
                  <InstagramIcon className="h-6 w-6" />
                </NextLink>
                <NextLink href="/edie-homepage" title="Linkedin">
                  <LinkedinIcon className="h-6 w-6" />
                </NextLink>
                <NextLink href="/edie-homepage" title="Twitter">
                  <TwitterIcon className="h-6 w-6" />
                </NextLink>
              </div>
            </div>
            <div id="contact">
              <div className="flex-flex-col space-y-1 lg:space-y-2">
                <p className="text-[0.625rem] font-medium text-[#828282] lg:text-sm">
                  Want us to contact you?
                </p>
                <div className="relative w-full rounded-xl bg-[#F2F2F2] shadow-sm lg:w-[23rem]">
                  <input
                    className="block h-12 w-full rounded-xl border-none bg-transparent pr-20 text-sm font-medium text-[#333333] ring-[#F2F2F2] placeholder:text-sm placeholder:font-medium placeholder:text-[#BDBDBD] focus:ring focus:ring-[#2D9CDB] focus:ring-opacity-50 lg:h-14 lg:w-[23rem] lg:pr-24 lg:text-lg lg:placeholder:text-lg"
                    placeholder="Email"
                    type="email"
                  />
                  <div className="absolute right-0 top-0 inline h-full p-1">
                    <button className="inline-flex h-full shrink-0 cursor-pointer select-none flex-wrap content-center items-center rounded-xl bg-[#2D9CDB] px-5 text-center">
                      <span className="text-sm font-medium text-[#F2F2F2] lg:text-lg">
                        Join
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="py-6 text-center font-monsterrat text-sm font-medium">
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
        </div>
      </footer>
      <BottomNavigation
        pageRoute="/edie-homepage"
        readmeRoute="/edie-homepage/readme"
        pageComponent={
          <NextLink
            href="/edie-homepage/readme"
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
          <NextLink href="/edie-homepage" className="group/readme text-white">
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
