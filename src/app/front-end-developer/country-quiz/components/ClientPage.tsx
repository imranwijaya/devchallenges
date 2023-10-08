"use client";
import type { NextPage } from "next";
import { useContext } from "react";
import { QuestionContext } from "./QuestionProvider";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";
import LandingCard from "./LandingCard";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";

const ClientPage: NextPage = () => {
  const { isLoading, isError, isSuccess, start } = useContext(QuestionContext);

  return (
    <div className="relative flex h-full min-h-[12rem] flex-col justify-center rounded-3xl bg-white px-4 py-8 transition-all lg:px-8 lg:py-16">
      <div className="relative flex flex-col gap-y-4 lg:gap-y-8">
        {isLoading && <LoadingCard />}
        {isError && <ErrorCard />}
        {isSuccess && !start && <LandingCard />}
        <QuestionCard />
        <ScoreCard />
      </div>
    </div>
  );
};

export default ClientPage;
