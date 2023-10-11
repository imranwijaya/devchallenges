"use client";
import type { NextPage } from "next";
import NextImage from "next/image";
import { useCallback, useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type CheckoutSchema,
  checkoutSchema,
  countries,
} from "../schemas/checkout";
import { FormError, FormLabel, FormSubmit } from "./FormComponent";
import { formatPrice } from "@/utils/legacy/format-number";
import LocationCityIcon from "./LocationCityIcon";
import MarkunreadMailboxIcon from "./MarkunreadMailboxIcon";
import photo1 from "@public/asset/legacy/responsive-web-developer/checkout-page/photo1.png";
import photo2 from "@public/asset/legacy/responsive-web-developer/checkout-page/photo2.png";
import {
  EnvelopeIcon,
  GlobeAmericasIcon,
  HomeIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { ButtonAdd, ButtonSubtract } from "./CartComponent";

const CheckoutForm: NextPage = () => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cart: {
        items: [
          {
            name: "Vintage Backbag",
            image: photo1,
            currency: "USD",
            initial_price: 94.99,
            final_price: 54.99,
            quantity: 1,
            total_price: 54.99,
          },
          {
            name: "Levi Shoes",
            image: photo2,
            currency: "USD",
            initial_price: 124.99,
            final_price: 74.99,
            quantity: 1,
            total_price: 74.99,
          },
        ],
        shipping_price: 19,
        total_price: 129.98,
        grand_total_price: 148.98,
      },
      contact: {
        email: "",
        phone_number: null,
      },
      shipping: {
        full_name: "Rodney Cotton",
        address: "",
        city: "",
        country: null,
        postal_code: "",
      },
      save_information: false,
    },
  });

  const { fields } = useFieldArray({ control, name: "cart.items" });
  const watchCart = watch("cart");
  const watchCartItems = watch("cart.items");

  useEffect(() => {
    const { unsubscribe } = watch((value, info) => {
      if (
        info.name?.startsWith("cart.items") &&
        (info.name?.endsWith("final_price") || info.name?.endsWith("quantity"))
      ) {
        const index = parseInt(info.name.split(".")[2]);
        const price = value.cart?.items?.at(index)?.final_price;
        const quantity = value.cart?.items?.at(index)?.quantity;
        if (price && quantity) {
          setValue(`cart.items.${index}.total_price`, price * quantity);
          const totalItemPrice = value.cart?.items?.reduce((acc, curr) => {
            return acc + (curr?.total_price as number);
          }, 0) as number;
          setValue(`cart.total_price`, totalItemPrice);
          const grandTotalPrice =
            totalItemPrice + (value.cart?.shipping_price as number);
          setValue(`cart.grand_total_price`, grandTotalPrice);
        }
      }
    });

    return () => unsubscribe();
  }, [watch]);

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (e: boolean) => setShowModal(e);

  const onSubmit = useCallback((data: CheckoutSchema) => {
    if (typeof window === "undefined") {
      return;
    }

    setShowModal(true);
    reset();
  }, []);

  const inputClassName =
    "block w-full rounded-xl border-gray-300 pl-10 text-xs font-semibold text-[#333333] shadow-sm ring-[#828282] placeholder:text-xs placeholder:font-normal placeholder:text-[#828282] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:text-base lg:placeholder:text-base";

  const inputIconClassName =
    "pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#828282]";

  return (
    <div className="flex flex-col gap-y-10 lg:flex-row-reverse lg:gap-x-28">
      <div>
        <div className="flex flex-col gap-y-20 rounded-xl bg-[#F2F2F2] px-7 py-8 lg:gap-y-24">
          <div className="flex flex-col gap-y-7 lg:gap-y-8">
            {fields.map((e, idx) => (
              <div key={idx} className="grid grid-cols-2 items-start gap-x-5">
                <div>
                  <NextImage
                    src={e.image}
                    alt="product"
                    className="h-auto w-36 rounded-[0.81rem]"
                  />
                </div>
                <div className="flex grow flex-col gap-y-8">
                  <div className="flex flex-col gap-y-1">
                    <div className="text-xs font-semibold text-[#4E5150] lg:text-base">
                      {e.name}
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="text-sm font-semibold text-[#F2994A]">
                        {formatPrice(e.final_price)}
                      </div>
                      <div className="text-[0.625rem] font-medium text-[#4E5150] line-through">
                        {formatPrice(e.initial_price)}
                      </div>
                    </div>
                  </div>
                  <div className="flex max-w-[9rem] flex-row justify-between rounded-xl border border-[#828282] px-[0.58rem] py-[0.875rem] lg:py-3">
                    <ButtonSubtract
                      index={idx}
                      prevQty={watchCartItems[idx].quantity}
                      setValue={setValue}
                      isSubmitting={isSubmitting}
                    />
                    <div className="font-semibold text-[#333333]">
                      {watchCartItems[idx].quantity}
                    </div>
                    <ButtonAdd
                      index={idx}
                      prevQty={watchCartItems[idx].quantity}
                      setValue={setValue}
                      isSubmitting={isSubmitting}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-sm font-semibold text-[#333333] lg:text-lg">
            <div className="flex flex-row justify-between border-t border-[#BDBDBD] py-2">
              <span className="">Shipping</span>
              <span className="">{formatPrice(watchCart.shipping_price)}</span>
            </div>
            <div className="flex flex-row justify-between border-t border-[#BDBDBD] py-2">
              <span className="">Total</span>
              <span className="">
                {formatPrice(watchCart.grand_total_price)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grow">
        <div className="flex flex-col gap-2">
          <form onSubmit={handleSubmit(onSubmit)} className="" noValidate>
            <div className="flex flex-col gap-y-11 lg:gap-y-14">
              <div className="flex flex-col gap-y-3">
                <div className="text-sm font-semibold text-[#333333] lg:text-lg">
                  Contact infomation
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <FormLabel text="E-mail" />
                  <div className="relative w-full">
                    <EnvelopeIcon className={inputIconClassName} />
                    <input
                      disabled={isSubmitting}
                      type="email"
                      className={inputClassName}
                      placeholder="Enter your email..."
                      {...register("contact.email")}
                    />
                  </div>

                  <FormError
                    name="contact.email"
                    message={errors.contact?.email?.message}
                  />
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <FormLabel text="Phone" />
                  <div className="relative w-full">
                    <PhoneIcon className={inputIconClassName} />
                    <input
                      disabled={isSubmitting}
                      type="number"
                      className={inputClassName}
                      placeholder="Enter your phone..."
                      {...register("contact.phone_number")}
                    />
                  </div>

                  <FormError
                    name="contact.phone_number"
                    message={errors.contact?.phone_number?.message}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="text-sm font-semibold text-[#333333] lg:text-lg">
                  Shipping address
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <FormLabel text="Full name" />
                  <div className="relative w-full">
                    <UserCircleIcon className={inputIconClassName} />
                    <input
                      disabled={isSubmitting}
                      type="text"
                      className={inputClassName}
                      placeholder="Your name..."
                      {...register("shipping.full_name")}
                    />
                  </div>

                  <FormError
                    name="shipping.full_name"
                    message={errors.shipping?.full_name?.message}
                  />
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <FormLabel text="Address" />
                  <div className="relative w-full">
                    <HomeIcon className={inputIconClassName} />
                    <input
                      disabled={isSubmitting}
                      type="text"
                      className={inputClassName}
                      placeholder="Your address..."
                      {...register("shipping.address")}
                    />
                  </div>

                  <FormError
                    name="shipping.address"
                    message={errors.shipping?.address?.message}
                  />
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <FormLabel text="City" />
                  <div className="relative w-full">
                    <LocationCityIcon
                      className={inputIconClassName}
                      fill="#828282"
                    />
                    <input
                      disabled={isSubmitting}
                      type="text"
                      className={inputClassName}
                      placeholder="Your city..."
                      {...register("shipping.city")}
                    />
                  </div>

                  <FormError
                    name="shipping.city"
                    message={errors.shipping?.city?.message}
                  />
                </div>

                <div className="grid grid-cols-2 gap-x-2">
                  <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                    <FormLabel text="Country" />
                    <div className="relative w-full">
                      <GlobeAmericasIcon className={inputIconClassName} />
                      <select
                        placeholder="Your country..."
                        className={inputClassName}
                        {...register("shipping.country")}
                      >
                        <option value="" disabled>
                          Your country...
                        </option>
                        {countries.map((e, index) => (
                          <option key={index} value={e.code}>
                            {e.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <FormError
                      name="shipping.country"
                      message={errors.shipping?.country?.message}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-y-1 lg:gap-y-[0.45rem]">
                    <FormLabel text="Postal code" />
                    <div className="relative w-full">
                      <MarkunreadMailboxIcon
                        className={inputIconClassName}
                        fill="#828282"
                      />
                      <input
                        disabled={isSubmitting}
                        type="number"
                        className={inputClassName}
                        placeholder="Your postal code..."
                        {...register("shipping.postal_code")}
                      />
                    </div>

                    <FormError
                      name="shipping.postal_code"
                      message={errors.shipping?.postal_code?.message}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-[0.45rem]">
                  <label className="inline-flex cursor-pointer items-center gap-x-2 lg:gap-x-3">
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
                      {...register("save_information")}
                    />
                    <span className="text-[0.625rem] font-semibold text-[#4F4F4F] lg:text-xs">
                      Save this information for next time
                    </span>
                  </label>
                  <FormError
                    name="save_information"
                    message={errors.save_information?.message}
                  />
                </div>
              </div>
            </div>
            <FormSubmit
              text="Continue"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
