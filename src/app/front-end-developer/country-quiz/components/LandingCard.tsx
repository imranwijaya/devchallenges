"use client";
import type { NextPage } from "next";
import { Fragment, useContext } from "react";
import { Transition } from "@headlessui/react";
import { QuestionContext } from "./QuestionProvider";

const LandingCard: NextPage = () => {
  const { handleStart } = useContext(QuestionContext);

  return (
    <Transition
      as={Fragment}
      appear
      show
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <button
        type="button"
        onClick={handleStart}
        className="rounded-xl border border-[rgba(96,102,208,0.8)] p-1 text-lg font-medium text-[rgba(96,102,208,0.8)] transition-all duration-500 ease-in-out hover:border-transparent hover:bg-[rgba(249,168,38,1)] hover:text-white"
      >
        Start
      </button>
    </Transition>
  );
};

export default LandingCard;
