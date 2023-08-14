import type { NextPage, Metadata } from "next";
import Readme from "./readme.mdx";

export const metadata: Metadata = {
  title: "README - 404 Not Found | Responsive Web Developer",
  description: "README - 404 Not Found | Responsive Web Developer",
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
