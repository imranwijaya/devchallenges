import type { NextPage, Metadata } from "next";
import NextLink from "next/link";
import NextImage, { type StaticImageData } from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { CodeIcon, EditIcon } from "./components/Icon";
import heroImageOriginal from "@public/asset/edie-homepage/heroImageOriginal.jpg";
import smarthome from "@public/asset/edie-homepage/smarthome.jpg";
import onboard from "@public/asset/edie-homepage/onboard.png";
import booking from "@public/asset/edie-homepage/booking.png";
import juiceProduct from "@public/asset/edie-homepage/juice-product.png";
import person1 from "@public/asset/edie-homepage/person1.png";
import person2 from "@public/asset/edie-homepage/person2.png";
import person3 from "@public/asset/edie-homepage/person3.png";
import person4 from "@public/asset/edie-homepage/person4.png";

type OurWork = {
  category: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
};

const ourWorks: OurWork[] = [
  {
    category: "Full stack application",
    title: "Smart home dashboard",
    image: smarthome,
    imageAlt: "Our Works",
  },
  {
    category: "UX/UI design",
    title: "Onboard application",
    image: onboard,
    imageAlt: "Our Works",
  },
  {
    category: "Mobile application",
    title: "Booking system",
    image: booking,
    imageAlt: "Our Works",
  },
  {
    category: "Front End application",
    title: "Juice product homepage",
    image: juiceProduct,
    imageAlt: "Our Works",
  },
];

const ourTeam: StaticImageData[] = [person3, person1, person2];

export const metadata: Metadata = {
  title: "Edie homepage | Responsive Web Developer",
  description: "Edie homepage | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <>
      <section className="flex flex-col gap-y-8 px-3 py-10 md:px-32 lg:gap-x-20 lg:gap-y-10 lg:px-12 lg:pt-24">
        <div>
          <div className="px-8 lg:space-y-4 lg:px-48">
            <p className="text-xs font-medium text-[#2D9CDB] lg:text-lg">
              Unhappy with your website?
            </p>
            <h1 className="flex flex-col text-2xl font-medium lg:text-5xl">
              <span>We create beautiful&nbsp;</span>
              <span>and fast web services</span>
            </h1>
          </div>
          <div className="pb-5 pt-4 lg:py-10">
            <NextImage
              src={heroImageOriginal}
              alt="hero-image"
              className="h-36 w-full rounded-2xl object-cover lg:h-[22rem]"
            />
          </div>
          <div>
            <div className="space-y-4 px-8 lg:space-y-10 lg:px-48">
              <h2 className="flex flex-col text-2xl font-medium lg:text-5xl">
                <span>Story, emotion&nbsp;</span>
                <span>and purpose</span>
              </h2>
              <p className="text-xs text-[#4F4F4F] lg:w-[23rem] lg:text-lg">
                We help transform your ideas into real world applications that
                will outperform your toughest competition and help you achieve
                your strategic goals in short period of time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-flex-col space-y-1 px-8 lg:space-y-2 lg:px-48">
            <p className="text-[0.625rem] font-medium text-[#828282] lg:text-sm">
              Want us to contact you?
            </p>
            <div className="relative w-full rounded-xl bg-[#F2F2F2] shadow-sm lg:w-[23rem]">
              <input
                className="block h-12 w-full rounded-xl border-none bg-transparent pr-20 text-sm font-medium ring-[#F2F2F2] placeholder:text-sm placeholder:font-medium placeholder:text-[#BDBDBD] focus:ring focus:ring-[#2D9CDB] focus:ring-opacity-50 lg:h-14 lg:w-[23rem] lg:pr-24 lg:text-lg lg:placeholder:text-lg"
                placeholder="Email"
                type="email"
              />
              <div className="absolute right-0 top-0 inline h-full p-1">
                <button className="inline-flex h-full shrink-0 cursor-pointer select-none flex-wrap content-center items-center rounded-xl bg-[#2D9CDB] px-5 text-center">
                  <span className="text-sm font-medium text-[#F2F2F2] lg:text-lg">
                    Join
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="flex flex-col gap-y-11 px-3 py-10 md:px-16 lg:gap-x-20 lg:gap-y-10 lg:px-36 lg:pt-24"
      >
        <h2 className="flex flex-col px-8 text-2xl font-medium lg:space-y-4 lg:px-0 lg:text-4xl">
          <span>We offer high&nbsp;</span>
          <span>demand services</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-[4.5rem] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          <div className="group flex flex-col gap-y-8 rounded-3xl px-8 py-11 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0px_10px_30px_0px_rgba(51,51,51,0.10)]">
            <div className="w-min rounded-2xl bg-[#2D9CDB] p-4">
              <EditIcon className="h-9 w-9" fill="#ffffff" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
            </div>
            <NextLink
              href="#"
              className="w-fit rounded-xl bg-[#E0E0E0] p-2 group-hover:bg-[#2D9CDB]"
            >
              <div className="font-medium text-[#828282] group-hover:text-white">
                Get started
              </div>
            </NextLink>
          </div>
          <div className="group flex flex-col gap-y-8 rounded-3xl px-8 py-11 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0px_10px_30px_0px_rgba(51,51,51,0.10)]">
            <div className="w-min rounded-2xl bg-[#27AE60] p-4">
              <CodeIcon className="h-9 w-9" fill="#ffffff" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Front End</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
            </div>
            <NextLink
              href="#"
              className="w-fit rounded-xl bg-[#E0E0E0] p-2 group-hover:bg-[#2D9CDB]"
            >
              <div className="font-medium text-[#828282] group-hover:text-white">
                Get started
              </div>
            </NextLink>
          </div>
          <div className="group flex flex-col gap-y-8 rounded-3xl px-8 py-11 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0px_10px_30px_0px_rgba(51,51,51,0.10)]">
            <div className="w-min rounded-2xl bg-[#EB5757] p-4">
              <CodeIcon className="h-9 w-9" fill="#ffffff" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Back End</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
            </div>
            <NextLink
              href="#"
              className="w-fit rounded-xl bg-[#E0E0E0] p-2 group-hover:bg-[#2D9CDB]"
            >
              <div className="font-medium text-[#828282] group-hover:text-white">
                Get started
              </div>
            </NextLink>
          </div>
        </div>
      </section>
      <section
        id="our-works"
        className="flex flex-col gap-y-12 px-3 py-10 md:px-16 lg:gap-x-20 lg:gap-y-3 lg:px-36 lg:pt-24"
      >
        <h2 className="flex flex-col px-8 text-2xl font-medium lg:space-y-4 lg:px-0 lg:text-4xl">
          <span>Good design means&nbsp;</span>
          <span>good business</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-9 lg:grid-cols-2 lg:gap-x-5 lg:[&>*:nth-child(odd)]:mt-40">
          {ourWorks.map((e, idx) => (
            <div key={idx}>
              <div className="flex flex-col gap-y-3 lg:gap-y-5">
                <div className="overflow-hidden rounded-xl lg:rounded-3xl">
                  <NextImage
                    src={e.image}
                    alt={e.imageAlt}
                    className="w-full rounded-xl object-cover transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 lg:rounded-3xl"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-light text-[#828282] lg:text-sm">
                    {e.category}
                  </div>
                  <h3 className="text-lg font-medium lg:text-2xl">{e.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-start lg:justify-end">
          <NextLink
            href="/edie-homepage"
            className="flex items-center gap-x-3 rounded-xl px-4 py-2 text-lg font-medium text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white lg:float-right lg:rounded-3xl lg:text-2xl"
          >
            <span className="text-sm font-bold lg:text-lg">see more</span>
            <ArrowLongRightIcon className="h-6 w-6" />
          </NextLink>
        </div>
      </section>
      <section className="grid grid-cols-1 items-center gap-y-9 px-3 py-10 md:px-16 lg:grid-cols-11 lg:px-36 lg:pt-24">
        <div className="space-y-3 lg:col-span-5">
          <div className="space-y-2">
            <p className="text-lg font-medium text-[#EB5757]">Meet the team</p>
            <h2 className="flex flex-col text-4xl font-medium">
              <span>We are chilled&nbsp;</span>
              <span>and a laidback&nbsp;</span>
              <span>team</span>
            </h2>
          </div>
          <p className="flex flex-col text-[#4F4F4F]">
            <span>Lorem ipsum dolor sit amet,&nbsp;</span>
            <span>consectetur adipiscing elit.</span>
          </p>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-2 lg:col-span-6 lg:gap-6">
          {ourTeam.map((e, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0 ? "row-span-2" : ""
              } flex h-full w-full flex-col items-center justify-center`}
            >
              <div className="w-full overflow-hidden rounded-3xl">
                <NextImage
                  src={e}
                  alt="team"
                  className="w-full rounded-3xl object-cover transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-7 px-3 py-10 md:px-16 lg:grid-cols-11 lg:gap-y-11 lg:px-36 lg:pt-24">
        <h4 className="text-2xl font-medium lg:w-3/4 lg:text-4xl">
          &ldquo;Fast and outstanding results. Edie understands their
          customer&rsquo;s needs. They have a young and talented team.&rdquo;
        </h4>
        <div className="flex flex-row gap-x-7">
          <div className="h-20 w-20">
            <NextImage src={person4} alt="person" className="rounded-xl" />
          </div>
          <div className="grow space-y-2">
            <h5 className="text-2xl font-medium">Carlos Tran</h5>
            <p className="text-lg font-medium text-[#828282]">
              The Decorate Gatsby
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
