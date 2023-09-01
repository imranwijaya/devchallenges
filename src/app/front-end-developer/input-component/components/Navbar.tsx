"use client";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { routesObject } from "@/app/_route";
import Sidebar from "./Sidebar";

const Navbar: NextPage = () => {
  const content = routesObject.frontEndDeveloper.child.buttonComponent;
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full flex-shrink-0 flex-col bg-[#FAFBFD] text-gray-700 md:w-64">
          <div className="flex flex-shrink-0 flex-row items-center justify-between px-8 py-4 text-sm md:justify-center">
            <NextLink
              href={content?.href as string}
              className="dark-mode:text-white focus:shadow-outline rounded-lg font-poppins  text-lg font-semibold focus:outline-none"
            >
              <span className="text-[#F7542E]">Dev</span>
              <span className="text-[#090F31] ">challenges.io</span>
            </NextLink>
            <Disclosure.Button className="focus:shadow-outline rounded-lg focus:outline-none md:hidden">
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3BottomRightIcon className="h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <nav className="hidden grow space-y-4 px-4 pb-4 font-medium text-[#9E9E9E] md:block md:overflow-y-auto md:pb-0">
            <Sidebar />
          </nav>
          <Disclosure.Panel className="flex h-full flex-col md:hidden">
            <Sidebar />
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
