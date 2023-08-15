import type { NextPage } from "next";
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import {
  EnvelopeIcon,
  GlobeAmericasIcon,
  HomeIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { type CheckoutSchema, countryNames } from "../schemas/checkout";
import { FormError, FormLabel, FormSubmit } from "./FormComponent";
import LocationCityIcon from "./LocationCityIcon";
import MarkunreadMailboxIcon from "./MarkunreadMailboxIcon";

type Props = {
  handleSubmit: UseFormHandleSubmit<CheckoutSchema>;
  onSubmit: (data: CheckoutSchema) => void;
  register: UseFormRegister<CheckoutSchema>;
  errors: FieldErrors<CheckoutSchema>;
  isSubmitting: boolean;
};

const CheckoutForm: NextPage<Props> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
}) => {
  const inputClassName =
    "block w-full rounded-xl border-gray-300 pl-10 text-xs font-semibold text-[#333333] shadow-sm ring-[#828282] placeholder:text-xs placeholder:font-normal placeholder:text-[#828282] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:text-base lg:placeholder:text-base";

  const inputIconClassName =
    "pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#828282]";

  return (
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
                    {countryNames.options.map((e, index) => (
                      <option key={index} value={e}>
                        {e}
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
  );
};

export default CheckoutForm;
