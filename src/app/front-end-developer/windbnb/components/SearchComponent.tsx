import type { NextPage } from "next";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { UseFormSetValue } from "react-hook-form";
import type { SearchSchema } from "../schemas/search";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

type Props = {
  prevQty: number;
  setValue: UseFormSetValue<SearchSchema>;
  isSubmitting: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ButtonAddGuestAdult: NextPage<Props> = ({
  prevQty,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        setValue(`guest.adult`, prevQty + 1);
      }}
      className="rounded-[0.25rem] border border-[rgba(130,130,130,1)] p-1"
      disabled={isSubmitting}
      {...props}
    >
      <PlusSmallIcon className="h-4 w-4 text-[rgba(130,130,130,1)]" />
    </button>
  );
};

export const ButtonSubtractGuestAdult: NextPage<Props> = ({
  prevQty,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (prevQty > 0) {
          setValue(`guest.adult`, prevQty - 1);
        }
      }}
      disabled={prevQty <= 0 || isSubmitting}
      className={`rounded-[0.25rem] border ${
        prevQty <= 0 ? "border-gray-200" : "border-[rgba(130,130,130,1)]"
      } p-1`}
      {...props}
    >
      <MinusSmallIcon
        className={`h-4 w-4 ${
          prevQty <= 0 ? "text-gray-200" : "text-[rgba(130,130,130,1)]"
        }`}
      />
    </button>
  );
};

export const ButtonAddGuestChildren: NextPage<Props> = ({
  prevQty,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        setValue(`guest.children`, prevQty + 1);
      }}
      className="rounded-[0.25rem] border border-[rgba(130,130,130,1)] p-1"
      disabled={isSubmitting}
      {...props}
    >
      <PlusSmallIcon className="h-4 w-4 text-[rgba(130,130,130,1)]" />
    </button>
  );
};

export const ButtonSubtractGuestChildren: NextPage<Props> = ({
  prevQty,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (prevQty > 0) {
          setValue(`guest.children`, prevQty - 1);
        }
      }}
      disabled={prevQty <= 0 || isSubmitting}
      className={`rounded-[0.25rem] border ${
        prevQty <= 0 ? "border-gray-200" : "border-[rgba(130,130,130,1)]"
      } p-1`}
      {...props}
    >
      <MinusSmallIcon
        className={`h-4 w-4 ${
          prevQty <= 0 ? "text-gray-200" : "text-[rgba(130,130,130,1)]"
        }`}
      />
    </button>
  );
};
