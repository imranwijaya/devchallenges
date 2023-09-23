"use client";
import type { NextPage } from "next";
import type { SearchSchema } from "../schemas/search";
import { Fragment, useState, useEffect } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { routesObject } from "@/app/_route";
import Search from "./Search";
import logo from "@public/asset/front-end-developer/windbnb/logo.svg";

type Props = {};
const Navbar: NextPage<Props> = () => {
  const content = routesObject.frontEndDeveloper.child.windbnb;

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (e: boolean) => setShowModal(e);
  const closeModalHandler = () => setShowModal(false);
  const {
    getValues,
    formState: { isSubmitting },
  } = useFormContext<SearchSchema>();

  const [selectedLocation, setSelectedLocation] = useState({
    country: "",
    city: "",
  });
  const [selectedGuest, setSelectedGuest] = useState(0);

  useEffect(() => {
    if (isSubmitting) {
      const getLocation = getValues("location");
      const getGuestTotal = getValues("guest.total");
      setSelectedLocation(getLocation);
      setSelectedGuest(getGuestTotal);
    }
  }, [isSubmitting]);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white">
        <div className="px-3 py-4 lg:px-20">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-1 flex-col items-stretch justify-between gap-y-2 md:flex-row md:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <NextLink href={content?.href as string} className="p-2">
                  <NextImage src={logo} alt="company logo" className="" />
                </NextLink>
              </div>
              <div
                className="block cursor-pointer md:ml-6"
                onClick={() => {
                  setShowModal((prev) => (prev ? prev : true));
                }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-row justify-between divide-x divide-[rgba(242,242,242,1)] rounded-2xl font-mulish shadow-[0px_1px_6px_0px_rgba(0,0,0,0.10)]">
                    <div className="flex h-full flex-col justify-center">
                      <div className="relative">
                        <div className="block w-full select-none rounded-2xl border border-transparent px-6 py-3 text-left text-sm">
                          <span
                            className={`${
                              selectedLocation.city === "" ||
                              selectedLocation.country === ""
                                ? "text-[rgba(189,189,189,1)]"
                                : "text-[rgba(51,51,51,1)]"
                            }`}
                          >
                            {selectedLocation.city === "" ||
                            selectedLocation.country === ""
                              ? "Add Location"
                              : `${selectedLocation.city}, ${selectedLocation.country}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-full flex-col justify-center">
                      <div className="relative">
                        <div className="block w-full select-none rounded-2xl border border-transparent px-6 py-3 text-left text-sm">
                          <span
                            className={`${
                              selectedGuest > 0
                                ? "text-[rgba(51,51,51,1)]"
                                : "text-[rgba(189,189,189,1)]"
                            }`}
                          >
                            {selectedGuest > 0
                              ? `${selectedGuest} ${
                                  selectedGuest > 1 ? `guests` : `guest`
                                }`
                              : "Add Guests"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        <div className="flex items-center justify-center gap-x-2 rounded-2xl bg-transparent px-6 py-3 text-sm font-bold text-[rgba(235,87,87,0.9)]">
                          <MagnifyingGlassIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={(e) => {
            showModalHandler(e);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-[225ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(79,79,79,0.4)]" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center text-center shadow-sm">
              <Transition.Child
                as={Fragment}
                enter="ease-[cubic-berzier(0.4,0,0.2,1)] duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100 transition-[box-shadow]"
                leave="ease-[cubic-berzier(0,0,0.2,1)] duration-[225ms]"
                leaveFrom="opacity-100 transition-transform"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="h-96 w-full transform overflow-hidden bg-white p-6 text-left align-middle shadow-sm transition-all lg:p-20 lg:pb-10">
                  <Search closeModal={closeModalHandler} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;
