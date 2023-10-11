import type { NextPage } from "next";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { UseFormSetValue } from "react-hook-form";
import type { CheckoutSchema } from "../schemas/checkout";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

type Props = {
  index: number;
  prevQty: number;
  setValue: UseFormSetValue<CheckoutSchema>;
  isSubmitting: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ButtonAdd: NextPage<Props> = ({
  prevQty,
  index,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      onClick={() => {
        setValue(`cart.items.${index}.quantity`, prevQty + 1);
      }}
      className="rounded-[0.25rem] bg-[#E0E0E0]"
      disabled={isSubmitting}
      {...props}
    >
      <PlusSmallIcon className="h-6 w-6 text-[#828282]" />
    </button>
  );
};

export const ButtonSubtract: NextPage<Props> = ({
  prevQty,
  index,
  setValue,
  isSubmitting,
  ...props
}) => {
  return (
    <button
      onClick={() => {
        if (prevQty > 1) {
          setValue(`cart.items.${index}.quantity`, prevQty - 1);
        }
      }}
      disabled={prevQty <= 1 || isSubmitting}
      className={`rounded-[0.25rem] ${
        prevQty <= 1 ? "bg-gray-100" : "bg-[#E0E0E0]"
      }`}
      {...props}
    >
      <MinusSmallIcon
        className={`h-6 w-6 ${
          prevQty <= 1 ? "text-gray-300" : "text-[#828282]"
        }`}
      />
    </button>
  );
};
