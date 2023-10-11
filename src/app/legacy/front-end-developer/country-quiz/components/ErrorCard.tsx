"use client";
import type { NextPage } from "next";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

const ErrorCard: NextPage = () => {
  return (
    <Transition
      as={Fragment}
      show
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="inline-flex items-center justify-center gap-4 font-bold text-[rgba(47,82,123,1)]">
        <span className="text-xl lg:text-2xl">an error occurred</span>
      </div>
    </Transition>
  );
};

export default ErrorCard;
