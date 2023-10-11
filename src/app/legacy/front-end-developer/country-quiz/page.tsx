import type { NextPage, Metadata } from "next";
import { QuestionProvider } from "./components/QuestionProvider";
import ClientPage from "./components/ClientPage";

export const metadata: Metadata = {
  title: "Country quiz | Front-end Developer",
  description: "Country quiz | Front-end Developer",
};

const ServerPage: NextPage = () => {
  return (
    <main className="flex grow flex-col">
      <div className="mx-auto flex h-full w-full grow flex-col justify-center md:w-1/2 xl:w-1/3">
        <div className="flex w-full max-w-full flex-col gap-y-2 px-4 md:max-w-6xl md:px-12 lg:w-[33rem]">
          <h1 className="text-2xl font-bold uppercase text-[rgba(242,242,242,1)] lg:text-4xl">
            Country quiz
          </h1>
          <QuestionProvider>
            <ClientPage />
          </QuestionProvider>
        </div>
      </div>
    </main>
  );
};

export default ServerPage;
