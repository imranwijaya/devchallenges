"use client";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ActiveLink from "@/components/ActiveLink";
import { menus } from "../layout";

const Navbar: NextPage = () => {
  return (
    <Disclosure as="nav" className="container mx-auto max-w-[90rem]">
      {({ open, close }) => (
        <div
          className={`${
            open ? "absolute inset-0" : "sticky top-0"
          } z-10 bg-white`}
        >
          <div className="px-3 lg:px-12">
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
                    <NextLink
                      href="/interior-consultant"
                      className="font-heebo text-2xl font-extrabold text-[#333333] lg:text-4xl"
                    >
                      Edie
                    </NextLink>
                  </div>
                )}
                <div className="hidden md:ml-6 md:block">
                  <ul className="flex space-x-20 text-xl font-medium md:space-x-10">
                    {menus.map((e, idx) => (
                      <li
                        key={idx}
                        className="group relative flex items-stretch"
                      >
                        <ActiveLink
                          href={e.href}
                          className="cursor-pointer px-2 py-1 group-hover:text-[#2D9CDB]"
                          // activeClassName="active peer font-bold text-[#2D9CDB]"
                          activeClassName=""
                          exact={e.exact}
                          aria-label={e.name}
                          onClick={() => close()}
                        >
                          {e.name}
                        </ActiveLink>
                        {/* <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-sm bg-[#2D9CDB] transition-all group-hover:w-full peer-[.active]:w-full" /> */}
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
                      // activeClassName="font-bold border-b-2 border-[#2D9CDB] p-2 text-[#2D9CDB]"
                      activeClassName=""
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
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
