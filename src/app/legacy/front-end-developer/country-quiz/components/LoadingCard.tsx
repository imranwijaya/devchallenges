"use client";
import type { NextPage } from "next";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import SpinnerAnimation from "./SpinnerAnimation";

const LoadingCard: NextPage = () => {
  return (
    <Transition
      as={Fragment}
      show
      enter="transition-opacity duration-75 translate-y-1"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="inline-flex items-center justify-center gap-4 font-bold text-[rgba(47,82,123,1)]">
        <SpinnerAnimation className="h-8 w-8 animate-spin lg:h-10 lg:w-10" />
        <span className="text-xl lg:text-2xl">loading</span>
      </div>
    </Transition>
  );
};

export default LoadingCard;
