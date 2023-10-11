"use client";
import type { NextPage } from "next";
import type { SearchSchema } from "../schemas/search";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import NextImage from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { locations } from "../_content";

const filterQuery = (q: { country: string; city: string; guest: number }) => {
  if (q.country === "" || q.city === "") {
    return locations;
  } else {
    const filter = locations.filter(
      (e) =>
        e.country === q.country && e.city === q.city && e.maxGuests >= q.guest,
    );
    return filter;
  }
};

const ClientPage: NextPage = () => {
  const [selectedLocation, setSelectedLocations] = useState(locations);

  const {
    getValues,
    formState: { isSubmitting },
  } = useFormContext<SearchSchema>();

  useEffect(() => {
    if (isSubmitting) {
      const guest = getValues("guest.total");
      const country = getValues("location.country");
      const city = getValues("location.city");
      const filtered = filterQuery({ country, city, guest });
      setSelectedLocations(filtered);
    }
  }, [isSubmitting]);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-[51,51,51,1]">
          Stays in Finland
        </h1>
        <div className="text-sm font-medium text-[rgba(79,79,79,1)]">
          {selectedLocation.length > 12 ? "12+" : selectedLocation.length}
          &nbsp;{selectedLocation.length > 1 ? "stays" : "stay"}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:gap-y-10">
        {selectedLocation.map((e, idx) => {
          // const calc = e.rating / 5;
          // const rating = parseFloat(calc.toFixed(2));
          const ratingClassName =
            e.rating >= 4.5
              ? "text-[rgba(235,87,87,1)]"
              : e.rating >= 4.0
              ? "text-[rgba(235,87,87,0.9)]"
              : e.rating >= 3
              ? "text-[rgba(235,87,87,0.8)]"
              : e.rating >= 2
              ? "text-[rgba(235,87,87,0.6)]"
              : "text-[rgba(235,87,87,0.4)]";

          return (
            <div key={idx} className="flex flex-col gap-y-5">
              <div className="min-h-32 relative aspect-video w-full rounded-3xl">
                <NextImage
                  src={e.photo}
                  alt={e.title}
                  fill
                  className="aspect-video rounded-3xl object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-x-2">
                    {e.superHost ? (
                      <span className="flex items-center justify-center rounded-xl border border-[rgba(79,79,79,1)] px-2 py-1 text-xs font-bold uppercase text-[rgba(79,79,79,1)]">
                        Super host
                      </span>
                    ) : null}
                    <span className="text-sm font-medium text-[rgba(130,130,130,1)]">
                      {e.type === "Entire apartment"
                        ? e.beds
                          ? `${e.type}, ${e.beds} ${
                              e.beds > 1 ? "beds" : "bed"
                            }`
                          : e.type
                        : e.type}
                    </span>
                  </div>
                  <span className="flex flex-row gap-x-1">
                    <StarIcon className={`h-4 w-4 ${ratingClassName}`} />
                    <span className="text-sm font-medium text-[rgba(79,79,79,1)]">
                      {e.rating}
                    </span>
                  </span>
                </div>
                <div className="font-semibold text-[rgba(51,51,51,1)]">
                  {e.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClientPage;
