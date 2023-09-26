import type { NextPage, Metadata } from "next";
import ClientPage from "./components/ClientPage";

export const metadata: Metadata = {
  title: "Random quote generator | Front-end Developer",
  description: "Random quote generator | Front-end Developer",
};

const ServerPage: NextPage = () => {
  return <ClientPage />;
};

export default ServerPage;
