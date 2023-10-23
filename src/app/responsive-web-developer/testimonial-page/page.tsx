import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import { routesObject } from "@/app/_route";
import StarIcon from "./components/StarIcon";
import RingRoundIcon from "./components/RingRoundIcon";
import googleTestimonial from "@public/asset/responsive-web-developer/testimonial-page/google-testimonial.png";
import metaTestimonial from "@public/asset/responsive-web-developer/testimonial-page/meta-testimonial.png";

const content = routesObject.responsiveWebDeveloper.child.testimonialPage;

export const metadata: Metadata = {
  title: `${content.name} | ${content.section}`,
  description: `${content.name} | ${content.section}`,
};

const Page: NextPage = () => {
  return (
    <div className="grid grow grid-cols-1 items-center gap-y-14 px-5 pb-10 pt-20 lg:grid-cols-2 lg:gap-x-[3.25rem] lg:px-[4.25rem] lg:py-0">
      <div id="container-about" className="space-y-7">
        <div className="flex flex-col gap-y-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(245,192,68,1)]">
            <StarIcon useGradient className="h-7 w-7" />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900">Reviewers</h1>
          <p className="text-xl text-[rgba(82,82,90,1)]">
            Reviewers is where people can access guidelines, checklists, and
            other tools to assist them in reviewing papers or manuscripts. It
            provides a structured approach to ensure that the review process is
            thorough, efficient, and consistent.
          </p>
        </div>

        <ul className="space-y-2.5 text-[rgba(82,82,90,1)]">
          <li className="flex flex-row items-start gap-x-1.5 text-sm lg:items-center">
            <RingRoundIcon className="h-6 w-6 flex-none fill-[rgba(76,161,84,1)]" />
            <p>Checklist to Review an Academic Paper</p>
          </li>
          <li className="flex flex-row items-start gap-x-1.5 text-sm lg:items-center">
            <RingRoundIcon className="h-6 w-6 flex-none fill-[rgba(76,161,84,1)]" />
            <p>Peer Review Checklist</p>
          </li>
          <li className="flex flex-row items-start gap-x-1.5 text-sm lg:items-center">
            <RingRoundIcon className="h-6 w-6 flex-none fill-[rgba(76,161,84,1)]" />
            <p>
              Checklist for Editors, Reviewers, and Authors of SPIE Journals
            </p>
          </li>
        </ul>
      </div>

      <div id="container-card" className="flex flex-col gap-y-8">
        <div
          id="card-google"
          className="flex max-w-[22rem] flex-col gap-y-3 place-self-end rounded-2xl bg-white px-8 py-7"
        >
          <div id="card-header" className="flex flex-row items-center gap-x-3">
            <div className="w-[5.75rem]">
              <NextImage src={googleTestimonial} alt="Google Testimonial" />
            </div>
            <div className="flex flex-row gap-x-1">
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon
                className="h-6 w-6"
                fill="rgb(212,212,216)"
                stroke="rgb(212,212,216)"
              />
            </div>
          </div>
          <div id="card-body" className="flex flex-col gap-y-2">
            <h2 className="font-semibold">Samantha Lee</h2>
            <p className="text-[rgba(82,82,90,1)]">
              The checklist ensures that the review process is thorough
            </p>
          </div>
        </div>
        <div
          id="card-meta"
          className="flex max-w-[22rem] flex-col gap-y-3 place-self-start rounded-2xl bg-white px-8 py-7"
        >
          <div id="card-header" className="flex flex-row items-center gap-x-3">
            <div className="w-[5.75rem]">
              <NextImage src={metaTestimonial} alt="Meta Testimonial" />
            </div>
            <div className="flex flex-row gap-x-1">
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
            </div>
          </div>
          <div id="card-body" className="flex flex-col gap-y-2">
            <h2 className="font-semibold">Rachel Patel</h2>
            <p className="text-[rgba(82,82,90,1)]">
              I highly recommend the Writecream Business Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
