import type { NextPage, Metadata } from "next";
import Readme from "./readme.mdx";

export const metadata: Metadata = {
  title: "README - Country quiz | Front-end Developer",
  description: "README - Country quiz | Front-end Developer",
};

const Page: NextPage = () => {
  return (
    <section className="grow px-2 py-4 font-sans">
      <article className="prose mx-auto dark:prose-invert">
        <Readme />
      </article>
    </section>
  );
};

export default Page;
