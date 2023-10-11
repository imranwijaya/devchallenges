"use client";
import type { NextPage } from "next";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { ButtonSchema } from "../schemas/form";
import ReactDOM from "react-dom";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Partial<ButtonSchema> & { children?: React.ReactNode };

const Button: NextPage<Props> = ({
  variant = "default",
  startIcon,
  endIcon,
  size,
  color = "default",
  disableShadow = false,
  hovered = false,
  focused = false,
  children = "Default",
  ...props
}) => {
  ReactDOM.preinit("https://fonts.googleapis.com/icon?family=Material+Icons", {
    as: "style",
  });

  const variantClassName = variant !== "default" ? ` btn-${variant}` : "";
  const colorClassName = color !== "default" ? ` btn-${color}` : "";
  const sizeClassName = size !== undefined ? ` btn-${size}` : "";
  const hoveredClassName = hovered ? " focused" : "";
  const focusClassName = focused ? " hovered" : "";
  const disableShadowClassName = disableShadow ? " no-shadow" : "";

  const btnClassName =
    "btn" +
    variantClassName +
    colorClassName +
    sizeClassName +
    hoveredClassName +
    focusClassName +
    disableShadowClassName;

  return (
    <button {...props} className={btnClassName}>
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
