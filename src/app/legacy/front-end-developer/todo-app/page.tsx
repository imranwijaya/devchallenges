import type { NextPage, Metadata } from "next";
import { TaskProvider } from "./components/Provider";
import ClientPage from "./components/ClientPage";

export const metadata: Metadata = {
  title: "Todo app | Front-end Developer",
  description: "Todo app | Front-end Developer",
};

const ServerPage: NextPage = () => {
  return (
    <TaskProvider>
      <ClientPage />
    </TaskProvider>
  );
};

export default ServerPage;
