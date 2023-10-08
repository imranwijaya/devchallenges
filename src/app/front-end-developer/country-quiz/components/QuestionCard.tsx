"use client";
import type { NextPage } from "next";
import { Fragment, useContext } from "react";
import NextImage from "next/image";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { QuestionContext } from "./QuestionProvider";
import undrawAdventure from "@public/asset/front-end-developer/country-quiz/undraw_adventure.svg";

const QuestionCard: NextPage = () => {
  const {
    isSuccess,
    start,
    selectedAnswer,
    isAnswerSelected,
    isAnswerCorrect,
    currentQuestion,
    handleAnswer,
    handleNextQuestion,
    handleResult,
  } = useContext(QuestionContext);

  return (
    <Transition
      as={Fragment}
      show={isSuccess && start && currentQuestion !== null}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="hidden opacity-0"
    >
      <div className="flex min-h-[15rem] flex-col gap-y-4 lg:min-h-[21rem] lg:gap-y-6">
        <div className="absolute right-0 flex w-full -translate-y-full justify-end lg:-translate-y-[120%]">
          <NextImage
            src={undrawAdventure}
            alt="Adventure"
            className="w-24 lg:w-40"
            priority
          />
        </div>
        <p className="select-none text-xl font-bold text-[rgba(47,82,123,1)] lg:text-2xl">
          {currentQuestion?.country.capital} is the capital of
        </p>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="flex flex-col gap-y-4 lg:gap-y-6">
            {currentQuestion?.options.map((e, idx) => (
              <button
                key={idx}
                type="button"
                aria-selected={isAnswerSelected && e === selectedAnswer}
                disabled={isAnswerSelected}
                aria-invalid={
                  isAnswerSelected && selectedAnswer !== currentQuestion?.answer
                }
                onClick={() => handleAnswer(e)}
                className={`group flex flex-row items-center gap-x-5 rounded-xl border ${
                  isAnswerSelected && e === currentQuestion?.answer
                    ? "border-transparent bg-[rgba(96,191,136,1)]"
                    : "border-[rgba(96,102,208,0.8)] bg-transparent"
                } px-2 py-1 enabled:transition-all enabled:delay-75 enabled:duration-200 enabled:ease-linear enabled:hover:border-transparent enabled:hover:bg-[rgba(249,168,38,1)] aria-selected:border-transparent aria-selected:transition-colors aria-selected:duration-500 aria-selected:ease-in aria-selected:aria-[invalid=false]:bg-[rgba(96,191,136,1)] aria-selected:aria-[invalid=true]:bg-[rgba(234,130,130,1)] lg:gap-x-11 lg:px-4 lg:py-3`}
              >
                <span
                  className={`select-none text-lg font-medium ${
                    isAnswerSelected && e === currentQuestion?.answer
                      ? "text-white"
                      : "text-[rgba(96,102,208,0.8)]"
                  } delay-75 group-enabled:group-hover:text-white group-aria-selected:text-white`}
                >
                  {String.fromCharCode(idx + 65)}
                </span>
                <div className="flex w-full grow flex-row items-center gap-2">
                  <p
                    className={`grow select-none text-left text-lg font-medium ${
                      isAnswerSelected && e === currentQuestion?.answer
                        ? "text-white"
                        : "text-[rgba(96,102,208,0.8)]"
                    } delay-75 group-enabled:group-hover:text-white group-aria-selected:text-white`}
                  >
                    {e}&nbsp;
                    {e === currentQuestion.answer && "(v)"}
                  </p>
                  {isAnswerSelected ? (
                    <>
                      {e === currentQuestion?.answer ? (
                        <CheckCircleIcon className="h-5 w-5 text-white delay-75" />
                      ) : null}
                      {e !== currentQuestion?.answer && e === selectedAnswer ? (
                        <XCircleIcon className="h-5 w-5 text-white delay-75" />
                      ) : null}
                    </>
                  ) : null}
                </div>
              </button>
            ))}
            {isAnswerSelected && isAnswerCorrect ? (
              <div>
                <button
                  type="button"
                  onClick={() => handleNextQuestion()}
                  className="float-right rounded-xl bg-[rgba(249,168,38,1)] px-5 py-1 text-lg font-bold text-white transition-all duration-500 ease-in-out lg:px-9 lg:py-3"
                >
                  Next
                </button>
              </div>
            ) : null}
            {isAnswerSelected && !isAnswerCorrect ? (
              <div>
                <button
                  type="button"
                  onClick={() => handleResult()}
                  className="float-right rounded-xl bg-[rgba(249,168,38,1)] px-5 py-1 text-lg font-bold text-white transition-all duration-500 ease-in-out lg:px-9 lg:py-3"
                >
                  Result
                </button>
              </div>
            ) : null}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default QuestionCard;
