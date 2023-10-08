"use client";
import type { NextPage } from "next";
import { Fragment, useContext } from "react";
import NextImage from "next/image";
import { QuestionContext } from "./QuestionProvider";
import undrawWinners from "@public/asset/front-end-developer/country-quiz/undraw_winners.svg";
import { Transition } from "@headlessui/react";

const ScoreCard: NextPage = () => {
  const { isSuccess, stop, score, reset } = useContext(QuestionContext);

  return (
    <Transition
      as={Fragment}
      show={isSuccess && stop}
      enter="transition-opacity duration-75 delay-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="hidden opacity-0"
    >
      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="mx-auto">
          <NextImage src={undrawWinners} alt="Winner" priority />
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold text-[rgba(29,53,93,1)] lg:text-5xl">
            Results
          </h2>
          <p className="text-center text-base text-[rgba(29,53,93,1)] lg:text-lg">
            <span>You got&nbsp;</span>
            <span className="text-2xl font-bold text-[rgba(111,207,151,1)] lg:text-4xl">
              {score}
            </span>
            <span>&nbsp;correct answer</span>
          </p>
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl border-2 border-[rgba(29,53,93,1)] px-5 py-2 text-lg font-semibold text-[rgba(29,53,93,1)] transition-all duration-500 ease-in-out hover:border-transparent hover:bg-[rgba(249,168,38,1)] hover:text-white lg:px-9 lg:py-4"
          >
            Try Again
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default ScoreCard;
