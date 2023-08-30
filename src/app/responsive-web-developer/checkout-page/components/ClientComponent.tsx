"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type CheckoutSchema, checkoutSchema } from "../schemas/checkout";
import CheckoutCart from "./Cart";
import CheckoutForm from "./Form";
import CheckoutPreview from "./Preview";
import photo1 from "@public/asset/responsive-web-developer/checkout-page/photo1.png";
import photo2 from "@public/asset/responsive-web-developer/checkout-page/photo2.png";

const ClientComponent: NextPage = () => {
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

  useEffect(() => {
    const { unsubscribe } = watch((value, info) => {
      if (
        info.name?.startsWith("cart.items") &&
        info.name?.endsWith("quantity")
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
    if (typeof window === "undefined") return;

    setShowModal(true);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-10 lg:flex-row-reverse lg:gap-x-[calc(10%_-_1rem)]">
        <div>
          <CheckoutCart
            fields={fields}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
          />
        </div>
        <div className="lg:grow">
          <CheckoutForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
      <CheckoutPreview
        fields={fields}
        watch={watch}
        showModal={showModal}
        showModalHandler={showModalHandler}
      />
    </>
  );
};

export default ClientComponent;
