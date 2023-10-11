import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import photo1 from "@public/asset/legacy/responsive-web-developer/interior-consultant/photo1.png";
import photo2 from "@public/asset/legacy/responsive-web-developer/interior-consultant/photo2.png";

export const metadata: Metadata = {
  title: "Home - Interior Consultant | Responsive Web Developer",
  description: "Home - Interior Consultant | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col px-3 py-5 md:px-32 lg:flex-row lg:gap-x-20 lg:gap-y-20 lg:px-20 lg:pt-28">
      <div className="flex flex-col justify-center lg:w-2/5">
        <h1 className="py-6 font-lora text-4xl font-medium -tracking-[0.10125rem] lg:pt-0 lg:text-5xl">
          Modern interior
        </h1>
        <p className="w-4/5 text-sm lg:text-2xl">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <div className="flex gap-x-3 py-6">
          <span className="text-sm font-bold lg:text-lg">Read more</span>
          <ArrowLongRightIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="relative lg:w-3/5">
        <NextImage src={photo1} alt="image" className="rounded-sm" />
        <div className="absolute -bottom-24 left-6 right-3 rounded-sm bg-[#181719] shadow-lg md:-bottom-16 lg:-bottom-24 lg:left-[unset] lg:right-9 lg:w-7/12">
          <div className="px-6 pb-6 pt-3">
            <div className="flex flex-col gap-y-[1.14rem]">
              <div className="flex flex-row items-center gap-x-3">
                <NextImage
                  src={photo2}
                  alt="image"
                  className="h-9 w-9 rounded-full lg:h-12 lg:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-xs font-medium lg:text-sm">Aliza Webber</p>
                  <div className="text-[0.625rem] font-medium text-[#828282] lg:text-xs">
                    Interior designer
                  </div>
                </div>
              </div>
              <div className="w-4/5 font-lora text-lg font-bold lg:text-2xl">
                Designed in 2020 by Aliza Webber
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
