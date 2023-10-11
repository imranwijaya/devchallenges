"use client";
import type { NextPage } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SearchSchema, searchSchema } from "../schemas/search";
import Navbar from "./Navbar";

type Props = { children: React.ReactNode };

const FormWrapper: NextPage<Props> = ({ children }) => {
  const { watch, ...methods } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      country: "",
      city: "",
      location: {
        country: "",
        city: "",
      },
      guest: { total: 0, adult: 0, children: 0 },
    },
  });

  return (
    <FormProvider watch={watch} {...methods}>
      <Navbar />
      <main className="pb-20">{children}</main>
    </FormProvider>
  );
};

export default FormWrapper;
