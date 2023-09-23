import type { NextPage } from "next";
import type { SearchSchema } from "../schemas/search";
import { useCallback, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Listbox, Menu } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, CheckIcon } from "@heroicons/react/20/solid";
import { uniqueLocations } from "../_content";
import {
  ButtonAddGuestAdult,
  ButtonSubtractGuestAdult,
  ButtonAddGuestChildren,
  ButtonSubtractGuestChildren,
} from "./SearchComponent";

type Props = { closeModal: () => void };

const Search: NextPage<Props> = ({ closeModal }) => {
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { isSubmitting, isDirty },
  } = useFormContext<SearchSchema>();

  const onSubmit = useCallback((data: SearchSchema) => {
    if (!isDirty || typeof window === "undefined") return;
  }, [isDirty]);

  useEffect(() => {
    const { unsubscribe } = watch((value, info) => {
      if (
        info.name?.startsWith("guest.adult") ||
        info.name?.startsWith("guest.children")
      ) {
        const adult = value.guest?.adult;
        const children = value.guest?.children;

        if (typeof adult === "number" && typeof children === "number") {
          setValue("guest.total", adult + children);
        }
      }
    });

    return () => unsubscribe();
  }, [watch]);

  const watchLocation = watch("location");
  const watchGuestAdult = watch("guest.adult");
  const watchGuestChildren = watch("guest.children");
  const watchGuestTotal = watch("guest.total");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex h-full flex-col justify-between"
    >
      <div className="grid grid-cols-1 divide-x divide-[rgba(242,242,242,1)] rounded-2xl font-mulish shadow-[0px_1px_6px_0px_rgba(0,0,0,0.10)] lg:grid-cols-3">
        <div className="flex h-full flex-col justify-center">
          <div className="relative">
            <Controller
              control={control}
              name="location"
              render={({ field: { onChange } }) => (
                <Listbox
                  value={watchLocation}
                  by="city"
                  onChange={(e) => onChange(e)}
                  disabled={isSubmitting}
                >
                  {({ open }) => (
                    <>
                      <Listbox.Button
                        className={`peer block w-full rounded-2xl border text-left ${
                          open
                            ? "border-[rgba(51,51,51,1)]"
                            : "border-transparent"
                        } px-6 pb-3 pt-6 text-sm`}
                      >
                        <span
                          className={`${
                            watchLocation.city === "" ||
                            watchLocation.country === ""
                              ? "text-[rgba(189,189,189,1)]"
                              : "text-[rgba(51,51,51,1)]"
                          }`}
                        >
                          {watchLocation.city === "" ||
                          watchLocation.country === ""
                            ? "Add Location"
                            : `${watchLocation.city}, ${watchLocation.country}`}
                        </span>
                      </Listbox.Button>
                      <label className="absolute left-6 top-3 z-10 origin-[0] translate-y-0 transform select-none text-[0.5625rem] font-extrabold uppercase text-[rgba(51,51,51,1)]">
                        Location
                      </label>
                      <Listbox.Options className="absolute mt-16 flex max-h-40 w-full flex-col gap-y-1 overflow-y-auto bg-white px-6 lg:mt-6 lg:max-h-[unset] lg:overflow-y-visible lg:pb-6">
                        {uniqueLocations.map((e, idx) => (
                          <Listbox.Option
                            key={idx}
                            value={{ country: e.country, city: e.city }}
                            id="location"
                            className="flex cursor-pointer flex-row items-center gap-x-2 rounded-2xl px-2 py-3 text-sm hover:bg-[rgba(51,51,51,0.1)]"
                          >
                            {({ selected }) => (
                              <>
                                <MapPinIcon className="h-5 w-5" />
                                {e.city}, {e.country}
                                {selected ? (
                                  <CheckIcon className="h-5 w-5" />
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </>
                  )}
                </Listbox>
              )}
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-center">
          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={`peer block w-full rounded-2xl border text-left ${
                      open ? "border-[rgba(51,51,51,1)]" : "border-transparent"
                    } px-6 pb-3 pt-6 text-sm`}
                    disabled={isSubmitting}
                  >
                    <span
                      className={`${
                        watchGuestTotal > 0
                          ? "text-[rgba(51,51,51,1)]"
                          : "text-[rgba(189,189,189,1)]"
                      }`}
                    >
                      {watchGuestTotal > 0
                        ? `${watchGuestTotal} ${
                            watchGuestTotal > 1 ? `guests` : `guest`
                          }`
                        : "Add Guests"}
                    </span>
                  </Menu.Button>
                  <label className="absolute left-6 top-3 z-10 origin-[0] translate-y-0 transform select-none text-[0.5625rem] font-extrabold uppercase text-[rgba(51,51,51,1)]">
                    Guests
                  </label>
                  <Menu.Items className="absolute mt-4 flex max-h-40 w-full flex-col gap-y-1 overflow-y-auto bg-white px-6 lg:mt-6 lg:max-h-[unset] lg:overflow-y-visible lg:pb-6">
                    <div className="flex w-full flex-row gap-y-2 lg:flex-col lg:gap-y-10">
                      <div className="flex w-1/2 flex-col gap-y-3">
                        <div>
                          <div className="text-sm font-bold text-[rgba(51,51,51,1)]">
                            Adults
                          </div>
                          <div className="text-sm text-[rgba(189,189,189,1)]">
                            Ages 13 or above
                          </div>
                        </div>
                        <div className="flex max-w-[7rem] flex-row justify-between">
                          <ButtonSubtractGuestAdult
                            prevQty={watchGuestAdult}
                            setValue={setValue}
                            isSubmitting={isSubmitting}
                          />
                          <div className="text-sm font-bold text-[rgba(51,51,51,1)]">
                            {watchGuestAdult}
                          </div>
                          <ButtonAddGuestAdult
                            prevQty={watchGuestAdult}
                            setValue={setValue}
                            isSubmitting={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="flex w-1/2 flex-col gap-y-3">
                        <div>
                          <div className="text-sm font-bold text-[rgba(51,51,51,1)]">
                            Children
                          </div>
                          <div className="text-sm text-[rgba(189,189,189,1)]">
                            Ages 2-12
                          </div>
                        </div>
                        <div className="flex max-w-[7rem] flex-row justify-between">
                          <ButtonSubtractGuestChildren
                            prevQty={watchGuestChildren}
                            setValue={setValue}
                            isSubmitting={isSubmitting}
                          />
                          <div className="text-sm font-bold text-[rgba(51,51,51,1)]">
                            {watchGuestChildren}
                          </div>
                          <ButtonAddGuestChildren
                            prevQty={watchGuestChildren}
                            setValue={setValue}
                            isSubmitting={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
        </div>
        <div className="hidden items-center justify-center lg:flex lg:flex-col">
          <div className="relative">
            <button
              type="submit"
              onClick={closeModal}
              className="flex items-center justify-center gap-x-2 rounded-2xl bg-[rgba(235,87,87,1)] px-6 py-3 text-sm font-bold text-[rgba(242,242,242,1)]"
              disabled={isSubmitting}
            >
              <MagnifyingGlassIcon className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center lg:hidden">
        <div className="relative">
          <button
            type="submit"
            onClick={closeModal}
            className="flex items-center justify-center gap-x-2 rounded-2xl bg-[rgba(235,87,87,1)] px-6 py-3 text-sm font-bold text-[rgba(242,242,242,1)]"
            disabled={isSubmitting}
          >
            <MagnifyingGlassIcon className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
