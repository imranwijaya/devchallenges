"use client";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ActiveLink from "@/components/ActiveLink";
import { routesObject } from "@/app/_route";

const content = routesObject.responsiveWebDeveloper.child.interiorConsultant;

type Menu = {
  name: string;
  href: string;
  exact: boolean;
  child: Menu[];
};

const menus: Menu[] = [
  {
    name: "Home",
    href: content.href,
    exact: true,
    child: [],
  },
  {
    name: "Collection",
    href: `${content.href}/collection`,
    exact: true,
    child: [],
  },
  {
    name: "About",
    href: `${content.href}/about`,
    exact: true,
    child: [],
  },
  {
    name: "Contact",
    href: `${content.href}/contact`,
    exact: true,
    child: [],
  },
];

const Navbar: NextPage = () => {
  return (
    <Disclosure>
      {({ open, close }) => (
        <nav
          className={`${
            open ? "absolute inset-0" : "sticky top-0"
          } z-10 bg-[#181719]`}
        >
          <div className="px-3 lg:px-20">
            <div className="relative flex h-16 items-center justify-between lg:h-20">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-between">
                {open ? null : (
                  <div className="flex flex-shrink-0 items-center">
                    <NextLink href={content.href} className="border p-2">
                      <span className="font-crimson-pro text-sm font-extralight uppercase tracking-widest">
                        This Interior
                      </span>
                    </NextLink>
                  </div>
                )}
                <div className="hidden md:ml-6 md:block">
                  <ul className="flex space-x-20 text-lg font-medium md:space-x-10">
                    {menus.map((e, idx) => (
                      <li
                        key={idx}
                        className="group relative flex items-stretch"
                      >
                        <ActiveLink
                          href={e.href}
                          className="cursor-pointer px-2 py-1"
                          activeClassName="active peer font-bold"
                          exact={e.exact}
                          aria-label={e.name}
                          onClick={() => close()}
                        >
                          {e.name}
                        </ActiveLink>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-sm bg-white transition-all group-hover:w-full peer-[.active]:w-full" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Disclosure.Panel className={`flex h-full flex-col md:hidden`}>
              <ul className="space-y-8 px-4 pb-3 pt-2 text-center font-medium">
                {menus.map((e, idx) => (
                  <li key={idx} className="block px-2">
                    <ActiveLink
                      href={e.href}
                      className=""
                      activeClassName="font-bold border-b-2 p-2"
                      exact={e.exact}
                      aria-label={e.name}
                      onClick={() => close()}
                    >
                      <span>{e.name}</span>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </div>
        </nav>
      )}
    </Disclosure>
  );
};

export default Navbar;
