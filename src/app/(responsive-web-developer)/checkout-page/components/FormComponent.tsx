import type { NextPage } from "next";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type FormLabelProps = { text: string };
export const FormLabel: NextPage<FormLabelProps> = ({ text }) => {
  return (
    <label className="block">
      <span className="select-none text-[0.625rem] font-semibold text-[#4F4F4F] lg:text-xs">
        {text}
      </span>
    </label>
  );
};

type FormErrorProps = { name: string; message: string | undefined };
export const FormError: NextPage<FormErrorProps> = ({ name, message }) => {
  return (
    <>
      {message ? (
        <label
          htmlFor={name}
          className="flex select-none items-center justify-between px-1 pb-1"
        >
          <span className="text-[0.625rem] text-red-600 lg:text-xs">
            {message}
          </span>
        </label>
      ) : (
        <></>
      )}
    </>
  );
};

type FormSubmitProps = {
  text: string;
  loading: boolean;
  disabled: boolean;
  className?: string;
  children?: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const FormSubmit: NextPage<FormSubmitProps> = ({
  text,
  loading,
  disabled,
  className = "float-right mb-10 mt-5 rounded-xl bg-[#F2994A] px-8 py-4 text-base font-semibold text-white lg:mb-0 lg:mt-6",
  type = "submit",
  children,
  ...props
}) => {
  const newClassName = `${className} ${loading ? "animate-spin" : ""}`.trim();

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={newClassName}
      aria-label={text}
    >
      {children ? children : text}
    </button>
  );
};
