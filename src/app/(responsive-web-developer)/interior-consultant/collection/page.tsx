import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection - Interior Consultant | Responsive Web Developer",
  description: "Collection - Interior Consultant | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col px-3 py-5 md:px-32 lg:flex-row lg:gap-x-20 lg:gap-y-20 lg:px-20 lg:pt-28">
      <div className="flex flex-col justify-center lg:w-2/5">
        <h1 className="py-6 font-lora text-4xl font-medium -tracking-[0.10125rem] lg:pt-0 lg:text-5xl">
          Collection
        </h1>
      </div>
    </section>
  );
};

export default Page;
