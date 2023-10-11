import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import { routesObject } from "@/app/_route";
import cactusImg from "@public/asset/responsive-web-developer/minimal-blog-card/cactus_img.jpg";

const content = routesObject.responsiveWebDeveloper.child.minimalBlogCard;

export const metadata: Metadata = {
  title: `${content.name} | ${content.section}`,
  description: `${content.name} | ${content.section}`,
};

const Page: NextPage = () => {
  return (
    <div className="max-w-[23rem] space-y-5 rounded-2xl bg-white pb-5 pt-4 shadow-[0px_30px_100px_0px_rgba(17,23,41,0.05)]">
      <div className="flex flex-col gap-y-4 px-4">
        <div className="h-[9.5rem] w-full">
          <NextImage
            src={cactusImg}
            alt="Cactus Img"
            className="rounded-2xl"
            priority
          />
        </div>
        <div className="inline-flex w-fit items-center rounded-2xl bg-[rgba(230,214,252,1)] px-4 py-1.5 text-[0.625rem] font-semibold text-[rgba(136,58,225,1)] [line-height:normal]">
          Design
        </div>
        <div className="space-y-1.5">
          <h1 className="text-lg font-bold text-[rgba(32,41,58,1)]">
            Embracing Minimalism
          </h1>
          <p className="text-sm font-thin text-[rgba(108,114,127,1)]">
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </p>
        </div>
      </div>
      <hr className="border" />
      <div className="px-4">
        <small className="text-xs text-[rgba(108,114,127,1)]">
          Annie Spratt
        </small>
      </div>
    </div>
  );
};

export default Page;
