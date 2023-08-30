import type { NextPage, Metadata } from "next";
import NextImage, { type StaticImageData } from "next/image";
import photo1 from "@public/asset/responsive-web-developer/my-team-page/photo1.png";
import photo2 from "@public/asset/responsive-web-developer/my-team-page/photo2.png";
import photo3 from "@public/asset/responsive-web-developer/my-team-page/photo3.png";
import photo4 from "@public/asset/responsive-web-developer/my-team-page/photo4.png";
import photo5 from "@public/asset/responsive-web-developer/my-team-page/photo5.png";
import photo6 from "@public/asset/responsive-web-developer/my-team-page/photo6.png";

type People = {
  name: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
};

const peoples: People[] = [
  {
    name: "Bill Mahoney",
    title: "Product owner",
    image: photo1,
    imageAlt: "gallery",
  },
  {
    name: "Saba Cabrera",
    title: "Art director",
    image: photo2,
    imageAlt: "gallery",
  },
  {
    name: "Shae Le",
    title: "Tech Lead",
    image: photo3,
    imageAlt: "gallery",
  },
  {
    name: "Skylah Lu",
    title: "UX Designer",
    image: photo4,
    imageAlt: "gallery",
  },
  {
    name: "Griff Richards",
    title: "Developer",
    image: photo5,
    imageAlt: "gallery",
  },
  {
    name: "Stan John",
    title: "Developer",
    image: photo6,
    imageAlt: "gallery",
  },
];

export const metadata: Metadata = {
  title: "My team page | Responsive Web Developer",
  description: "My team page | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col px-3 py-8 md:px-32 lg:gap-y-20 lg:px-60 lg:pt-28">
      <div className="flex flex-col items-start lg:flex-row">
        <h1 className="py-10 font-pt-serif text-4xl font-bold -tracking-[0.10125rem] lg:w-1/2 lg:pt-0">
          The creative crew
        </h1>
        <div className="flex flex-col gap-y-3 lg:w-1/2">
          <h2 className="text-lg font-semibold uppercase">Who we are</h2>
          <p className="text-sm lg:text-lg">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-1 gap-y-4 py-9 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-6 [&>*:nth-child(2n)]:mt-16 lg:[&>*:nth-child(2n)]:mt-0 lg:[&>*:nth-child(3n+2)]:mt-28">
        {peoples.map((e) => (
          <div>
            <div className="flex">
              <div>
                <NextImage
                  src={e.image}
                  alt={e.imageAlt}
                  className="rounded-sm"
                />
              </div>
              <div className="writing-vertical-lr whitespace-nowrap px-1 font-pt-serif text-xs uppercase text-black">
                {e.title}
              </div>
            </div>
            <p className="py-3 text-sm font-semibold lg:text-lg">{e.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
