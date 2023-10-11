"use client";
import type { NextPage } from "next";
import type { ApiSuccessResponseBody } from "../types/api-response-body";
import { useCallback, useEffect, useState } from "react";
import { ArrowPathIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import SpinnerAnimation from "./SpinnerAnimation";

const ClientPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRandomQuote, setIsRandomQuote] = useState(true);
  const [data, setData] = useState<ApiSuccessResponseBody["data"]>([]);

  const setStatesBeforeFetch = () => {
    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);
  };

  const fetchRandomQuote = useCallback(async () => {
    setStatesBeforeFetch();
    setIsRandomQuote(true);

    const res = await fetch(
      "/legacy/front-end-developer/random-quote-generator/api/random",
      { method: "GET" },
    );
    setIsLoading(false);

    if (res.ok) {
      const resJson: ApiSuccessResponseBody = await res.json();

      setIsSuccess(true);
      setData(resJson.data);
    } else {
      setIsError(true);
    }
  }, []);

  const fetchQuotesByAuthor = useCallback(async (author: string) => {
    setStatesBeforeFetch();
    setIsRandomQuote(false);

    const res = await fetch(
      `/legacy/front-end-developer/random-quote-generator/api/quotes?author=${author}`,
      { method: "GET" },
    );
    setIsLoading(false);

    if (res.ok) {
      const resJson: ApiSuccessResponseBody = await res.json();

      setIsSuccess(true);
      setData(resJson.data);
    } else {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white">
        <div className="px-3 lg:px-20">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-end">
              <div className="flex flex-shrink-0 items-center">
                <button
                  type="button"
                  disabled={isLoading}
                  className="flex items-center gap-x-2 rounded-md px-4 py-2 text-[rgba(79,79,79,1)] hover:bg-[rgba(79,79,79,0.1)]"
                  onClick={() => fetchRandomQuote()}
                >
                  <span className="text-lg font-medium">random</span>
                  <ArrowPathIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex grow flex-col">
        <div className="mx-auto flex h-full grow flex-col justify-center">
          <div className="flex max-w-4xl flex-col gap-y-6 px-6 md:px-16 lg:gap-y-12">
            {isLoading ? (
              <div className="inline-flex items-center justify-center gap-4">
                <SpinnerAnimation className="h-8 w-8 animate-spin lg:h-10 lg:w-10" />
                <span className="text-2xl lg:text-4xl">
                  loading quote{isRandomQuote ? "" : "s"}
                </span>
              </div>
            ) : null}
            {isError ? (
              <div className="inline-flex items-center justify-center gap-4">
                <span className="text-2xl lg:text-4xl">
                  an error occurred while retrieving quote
                  {isRandomQuote ? "" : "s"}
                </span>
              </div>
            ) : null}
            {isSuccess ? (
              <>
                {data.length > 0 && !isRandomQuote ? (
                  <div className="flex flex-row gap-x-12 py-3 lg:gap-x-24 lg:py-6">
                    <span className="w-2" />
                    <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)] lg:text-4xl">
                      {data[0].quoteAuthor}
                    </h2>
                  </div>
                ) : null}
                <ul className="flex flex-col gap-y-8 lg:gap-y-16">
                  {data.map((e) => (
                    <li
                      key={e._id}
                      className="flex flex-row gap-x-12 lg:gap-x-24"
                    >
                      <span className="h-auto w-2 shrink-0 bg-[rgba(247,223,148,1)]"></span>
                      <p className="text-2xl font-medium lg:text-4xl">
                        &ldquo;{e.quoteText}&rdquo;
                      </p>
                    </li>
                  ))}
                </ul>
                {data.length > 0 && isRandomQuote ? (
                  <button
                    type="button"
                    onClick={() => fetchQuotesByAuthor(data[0].quoteAuthor)}
                    className="group flex flex-row gap-x-12 py-3 transition-colors duration-500 ease-out hover:bg-[rgba(51,51,51,1)] lg:gap-x-24 lg:py-6"
                  >
                    <span className="w-2" />
                    <div className="flex flex-1 flex-row items-center justify-between text-left">
                      <div>
                        <h2 className="text-xl font-bold text-[rgba(79,79,79,1)] group-hover:text-[rgba(242,242,242,1)] lg:text-2xl">
                          {data[0].quoteAuthor}
                        </h2>
                        <p className="text-[rgba(130,130,130,1)] group-hover:text-[rgba(130,130,130,1)]">
                          {data[0].quoteGenre}
                        </p>
                      </div>
                      <span className="px-4 text-white group-hover:text-[rgba(242,242,242,1)] lg:px-8">
                        <ArrowLongRightIcon className="h-9 w-9" />
                      </span>
                    </div>
                  </button>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default ClientPage;
