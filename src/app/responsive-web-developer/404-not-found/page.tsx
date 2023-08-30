import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import scarecrow from "@public/asset/responsive-web-developer/404-not-found/scarecrow.png";

export const metadata: Metadata = {
  title: "404 Not Found | Responsive Web Developer",
  description: "404 Not Found | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col px-6 pt-5 md:px-16 md:pt-10">
      <h1 className="font-inconsolata text-2xl font-bold uppercase -tracking-[0.12rem] text-[#333333]">
        404 Not Found
      </h1>
      <div className="flex grow flex-col items-center gap-x-[7.42rem] md:flex-row">
        <div className="px-5 py-[3.75rem] md:px-0 md:py-0">
          <NextImage src={scarecrow} alt="image" />
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-[1.87rem] md:gap-y-[2.25rem]">
            <h1 className="text-5xl font-bold -tracking-[0.105rem] md:text-[4rem] md:-tracking-[0.14rem]">
              I have bad news for you
            </h1>
            <p className="text-lg -tracking-[0.039rem] text-[#4F4F4F] md:w-3/4 md:text-2xl md:-tracking-wider">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
          </div>
          <div>
            <NextLink
              href="/"
              className="inline-flex max-w-fit bg-black px-10 py-6 text-sm font-bold uppercase -tracking-[0.031rem] text-white"
            >
              Back to Homepage
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
