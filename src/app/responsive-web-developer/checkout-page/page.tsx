import type { NextPage, Metadata } from "next";
import ClientComponent from "./components/ClientComponent";

export const metadata: Metadata = {
  title: "Checkout page | Responsive Web Developer",
  description: "Checkout page | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <section className="flex grow flex-col gap-y-5 px-3 py-8 md:px-32 lg:gap-y-14 lg:px-[calc(12%_-_1rem)] lg:py-16">
      <h1 className="text-2xl font-semibold text-[#4E5150] lg:text-4xl">
        Checkout
      </h1>
      <ClientComponent />
    </section>
  );
};

export default Page;
