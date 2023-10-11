import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import profilePhoto from "@public/asset/legacy/responsive-web-developer/my-gallery/profilePhoto.png";
import photo1 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo1.png";
import photo2 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo2.png";
import photo3 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo3.png";
import photo4 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo4.png";
import photo5 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo5.png";
import photo6 from "@public/asset/legacy/responsive-web-developer/my-gallery/photo6.png";

export const metadata: Metadata = {
  title: "My Gallery | Responsive Web Developer",
  description: "My Gallery | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col gap-y-10 px-3 py-7 md:px-32 lg:gap-y-16 lg:px-60 lg:py-[3.75rem]">
      <div className="flex flex-col gap-y-3 lg:gap-y-6">
        <div className="flex flex-col items-center gap-y-[0.7rem] lg:gap-y-4">
          <div className="">
            <NextImage
              src={profilePhoto}
              alt="Profile Photo"
              className="h-[6.35994rem] w-[6.35994rem] rounded-2xl lg:h-[9.75rem] lg:w-[9.75rem]"
            />
          </div>
          <div className="flex flex-col gap-y-1 text-center lg:gap-y-2">
            <h1 className="text-sm font-semibold text-[#4E5150] lg:text-2xl">
              Rodney Cotton
            </h1>
            <h2 className="text-[0.625rem] font-semibold text-[#A9A9A9] lg:text-sm">
              Helsinki, Finland
            </h2>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-3 lg:gap-x-6">
          <div className="flex h-[3.25rem] w-20 flex-col justify-center rounded-xl bg-[#E5E5E5] lg:h-16 lg:w-24">
            <h4 className="text-center text-xs font-medium text-[#4E5150] lg:text-lg">
              100
            </h4>
            <h3 className="text-center text-xs font-medium text-[#BDBDBD] lg:text-sm">
              Posts
            </h3>
          </div>
          <div className="flex h-[3.25rem] w-20 flex-col justify-center rounded-xl bg-[#E5E5E5] lg:h-16 lg:w-24">
            <h4 className="text-center text-xs font-medium text-[#4E5150] lg:text-lg">
              2,242
            </h4>
            <h3 className="text-center text-xs font-medium text-[#BDBDBD] lg:text-sm">
              Follower
            </h3>
          </div>
          <div className="flex h-[3.25rem] w-20 flex-col justify-center rounded-xl bg-[#E5E5E5] lg:h-16 lg:w-24">
            <h4 className="text-center text-xs font-medium text-[#4E5150] lg:text-lg">
              1,432
            </h4>
            <h3 className="text-center text-xs font-medium text-[#BDBDBD] lg:text-sm">
              Following
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 lg:gap-8">
        <div>
          <NextImage
            src={photo1}
            alt="gallery"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-2">
          <NextImage
            src={photo2}
            alt="gallery"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3 lg:gap-8">
          <div className="col-span-2">
            <NextImage
              src={photo3}
              alt="gallery"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <NextImage
              src={photo5}
              alt="gallery"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <NextImage
              src={photo6}
              alt="gallery"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div>
          <NextImage
            src={photo4}
            alt="gallery"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
