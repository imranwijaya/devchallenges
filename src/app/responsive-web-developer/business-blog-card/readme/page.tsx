import type { NextPage, Metadata } from "next";
import Readme from "./readme.mdx";
import { routesObject } from "@/app/_route";

const content = routesObject.responsiveWebDeveloper.child.businessBlogCard;

export const metadata: Metadata = {
  title: `README - ${content.name} | ${content.section}`,
  description: `README - ${content.name} | ${content.section}`,
};

const Page: NextPage = () => {
  return (
    <section className="grow px-2 py-4 font-sans">
      <article className="prose mx-auto">
        <Readme />
      </article>
    </section>
  );
};

export default Page;
