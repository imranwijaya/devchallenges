import type { NextPage, Metadata } from "next";
import ClientPage from "./components/ClientPage";

export const metadata: Metadata = {
  title: "Windbnb | Front-end Developer",
  description: "Windbnb | Front-end Developer",
};

const ServerPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-6 px-3 py-8 md:px-28 lg:px-20 lg:pt-28">
      <ClientPage />
    </div>
  );
};

export default ServerPage;
