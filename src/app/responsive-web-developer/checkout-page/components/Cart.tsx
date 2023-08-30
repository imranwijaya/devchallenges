import type { NextPage } from "next";
import type {
  FieldArrayWithId,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type { CheckoutSchema } from "../schemas/checkout";
import NextImage from "next/image";
import { formatPrice } from "@/utils/format-number";
import { ButtonAdd, ButtonSubtract } from "./CartComponent";

type Props = {
  fields: FieldArrayWithId<CheckoutSchema, "cart.items", "id">[];
  setValue: UseFormSetValue<CheckoutSchema>;
  watch: UseFormWatch<CheckoutSchema>;
  isSubmitting: boolean;
};

const CheckoutCart: NextPage<Props> = ({
  fields,
  setValue,
  watch,
  isSubmitting,
}) => {
  const watchCart = watch("cart");
  const watchCartItems = watch("cart.items");

  return (
    <div className="flex flex-col gap-y-20 rounded-xl bg-[#F2F2F2] px-7 py-8 lg:w-[24rem] lg:gap-y-24">
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
            <div className="flex h-full grow flex-col justify-between gap-y-8">
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
          <span className="">{formatPrice(watchCart.grand_total_price)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
