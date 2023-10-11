import type { NextPage } from "next";
import type { FieldArrayWithId, UseFormWatch } from "react-hook-form";
import type { CheckoutSchema } from "../schemas/checkout";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { formatPrice } from "@/utils/legacy/format-number";
import Modal from "@/components/legacy/Modal";

type Props = {
  fields: FieldArrayWithId<CheckoutSchema, "cart.items", "id">[];
  watch: UseFormWatch<CheckoutSchema>;
  showModal: boolean;
  showModalHandler: (e: boolean) => void;
};

const CheckoutPreview: NextPage<Props> = ({
  fields,
  watch,
  showModal,
  showModalHandler,
}) => {
  const watchCartItems = watch("cart.items");
  const watchCartShippingPrice = watch("cart.shipping_price");
  const watchCartGrandTotalPrice = watch("cart.grand_total_price");
  const watchContact = watch("contact");
  const watchShipping = watch("shipping");
  const watchSaveInformation = watch("save_information");

  return (
    <Modal
      title="One Last Step"
      render={<></>}
      show={showModal}
      handler={showModalHandler}
    >
      <div className="flex flex-col gap-2">
        <div className="pt-6">
          <div className="rounded-md bg-yellow-100 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-6 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-900">
                  Make sure your order data is correct
                </h3>
                <div className="mt-2 text-sm font-normal text-yellow-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="rounded-t-md bg-blue-100 p-4 font-semibold">
            <span>Product(s)</span>
          </div>
          <div className="rounded-b-md bg-blue-50 p-4">
            {fields.map((e, idx) => (
              <div key={idx} className="flex flex-row gap-x-2">
                <div className="flex grow gap-x-2 text-[#4E5150]">
                  <span>{e.name}</span>
                  <span>{formatPrice(e.final_price)}</span>
                  <span>x</span>
                  <span>{watchCartItems[idx].quantity}</span>
                </div>
                <div className="flex min-w-[4.75rem] flex-row justify-between gap-x-2 text-[#333333]">
                  <span>=</span>
                  <span>{formatPrice(watchCartItems[idx].total_price)}</span>
                </div>
              </div>
            ))}
            <div className="flex flex-row gap-x-2 border-b border-[#BDBDBD] pb-2">
              <div className="flex grow gap-x-2 text-[#4E5150]">
                <span>Shipping</span>
              </div>
              <div className="flex min-w-[4.75rem] flex-row justify-between gap-x-2 text-[#333333]">
                <span>=</span>
                <span>{formatPrice(watchCartShippingPrice)}</span>
              </div>
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="flex grow gap-x-2 font-semibold text-[#4E5150]">
                <span>Total</span>
              </div>
              <div className="flex min-w-[4.75rem] flex-row justify-between gap-x-2 font-semibold text-[#333333]">
                <span>=</span>
                <span>{formatPrice(watchCartGrandTotalPrice)}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-4">
            <div className="rounded-t-md bg-blue-100 p-4 font-semibold">
              <span>Contact information</span>
            </div>
            <div className="rounded-b-md bg-blue-50 p-4">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Email</span>
                  <span className="text-[#333333]">{watchContact.email}</span>
                </div>
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Phone</span>
                  <span className="text-[#333333]">
                    {watchContact.phone_number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <div className="rounded-t-md bg-blue-100 p-4 font-semibold">
              <span>Shipping address</span>
            </div>
            <div className="rounded-b-md bg-blue-50 p-4">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Full name</span>
                  <span className="text-[#333333]">
                    {watchShipping.full_name}
                  </span>
                </div>
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Address</span>
                  <span className="text-[#333333]">
                    {watchShipping.address}
                  </span>
                </div>
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">City</span>
                  <span className="text-[#333333]">{watchShipping.city}</span>
                </div>
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Country</span>
                  <span className="text-[#333333]">
                    {watchShipping.country}
                  </span>
                </div>
                <div className="flex flex-row justify-between gap-x-2">
                  <span className="text-[#4E5150]">Postal code</span>
                  <span className="text-[#333333]">
                    {watchShipping.postal_code}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex flex-row justify-between gap-x-2">
                <span className="font-semibold text-[#4E5150]">
                  Save this information?
                </span>
                <span className="text-[#333333]">
                  {watchSaveInformation ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutPreview;
