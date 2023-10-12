import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import { routesObject } from "@/app/_route";
import heroImage from "@public/asset/responsive-web-developer/business-blog-card/hero-image-business-card.png";
import whiteOverlay from "@public/asset/responsive-web-developer/business-blog-card/white-overlay.svg";
import avatarImage from "@public/asset/responsive-web-developer/business-blog-card/avatar-image-business-card.png";

const content = routesObject.responsiveWebDeveloper.child.businessBlogCard;

export const metadata: Metadata = {
  title: `${content.name} | ${content.section}`,
  description: `${content.name} | ${content.section}`,
};

const Page: NextPage = () => {
  return (
    <div className="max-w-[26.125rem] space-y-6 rounded-2xl bg-white pb-6">
      <div className="flex flex-col">
        <div className="relative w-full">
          <NextImage
            src={heroImage}
            alt="Hero Image"
            className="rounded-t-2xl"
            priority
          />
          <NextImage
            src={whiteOverlay}
            alt="White Overlay"
            className="absolute inset-x-0 -bottom-1"
            priority
          />
        </div>
        <div className="space-y-3 px-8">
          <h1 className="font-poppins text-2xl font-bold text-[rgba(17,23,41,1)]">
            Perfect solution for small business
          </h1>
          <p className="font-thin text-[rgba(103,116,137,1)]">
            Small businesses need to generate leads to grow. You can use tools
            like Ringy.
          </p>
        </div>
      </div>
      <hr className="border" />
      <div className="flex flex-row items-center gap-x-3 px-8">
        <div className="rounded-full bg-[rgba(242,245,249,1)] p-1">
          <NextImage
            src={avatarImage}
            alt="Avatar Image"
            className="h-9 w-9 rounded-full"
            priority
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-[rgba(17,23,41,1)] [line-height:normal]">
            Amy Burgess
          </h2>
          <small className="font-semibold text-[rgba(103,116,137,1)] [line-height:normal]">
            Customer Manger, Solution Oy
          </small>
        </div>
      </div>
    </div>
  );
};

export default Page;
