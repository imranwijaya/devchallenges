"use client";
import type { NextPage } from "next";
import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import type { InputSchema } from "../schemas/form";
import ReactDOM from "react-dom";

type InputProps = DetailedHTMLProps<
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
  HTMLInputElement
> &
  Partial<Omit<InputSchema, "size">>;
type TextareaProps = DetailedHTMLProps<
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
  HTMLTextAreaElement
> &
  Partial<Omit<InputSchema, "size">>;

type Props = { multiline?: boolean; size?: "sm" | "md" | "lg" } & (
  | InputProps
  | TextareaProps
);

const Input: NextPage<Props> = ({
  labelText = "Label",
  helperText,
  startIcon,
  endIcon,
  size,
  error = false,
  fullWidth = false,
  multiline = false,
  hovered = false,
  focused = false,
  placeholder = "Placeholder",
  row = "1",
  ...props
}) => {
  ReactDOM.preinit("https://fonts.googleapis.com/icon?family=Material+Icons", {
    as: "style",
  });

  const sizeClassName = size !== undefined ? ` input-${size}` : "";
  const hoveredClassName = hovered ? " hovered" : "";
  const focusedClassName = focused ? " focused" : "";
  const fullWidthClassName = fullWidth ? " full-width" : "";
  const errorClassName = error ? " input-error" : "";
  const iconStartClassName = startIcon ? " icon-start" : "";
  const iconEndClassName = endIcon ? " icon-end" : "";

  const inputClassName =
    "input" +
    sizeClassName +
    fullWidthClassName +
    hoveredClassName +
    focusedClassName +
    iconStartClassName +
    iconEndClassName +
    errorClassName;

  const textareaClassName =
    "input resize-none" +
    sizeClassName +
    fullWidthClassName +
    hoveredClassName +
    focusedClassName +
    iconStartClassName +
    iconEndClassName +
    errorClassName;

  const inputContainerClassName =
    "group/input" + hoveredClassName + focusedClassName;
  const inputGroupClassName = "input-group" + fullWidthClassName;
  const labelTextClassName = error ? "label-text label-error" : "label-text";
  const labelTextAltClassName = error
    ? "label-text-alt label-error"
    : "label-text-alt";

  if (!multiline) {
    return (
      <div className={inputContainerClassName}>
        {labelText && (
          <label className="label">
            <span className={labelTextClassName}>{labelText}</span>
          </label>
        )}
        <div className={inputGroupClassName}>
          {startIcon && (
            <span className="material-icons input-icon start">{startIcon}</span>
          )}
          <input
            {...(props as InputProps)}
            placeholder={placeholder}
            className={inputClassName}
          />
          {endIcon && (
            <span className="material-icons input-icon end">{endIcon}</span>
          )}
        </div>
        {helperText && (
          <label className="label">
            <span className={labelTextAltClassName}>{helperText}</span>
          </label>
        )}
      </div>
    );
  }

  return (
    <div className={inputContainerClassName}>
      {labelText && (
        <label className="label">
          <span className={labelTextClassName}>{labelText}</span>
        </label>
      )}
      <div className={inputGroupClassName}>
        {startIcon && (
          <span className="material-icons input-icon start">{startIcon}</span>
        )}
        <textarea
          {...(props as TextareaProps)}
          placeholder={placeholder}
          className={textareaClassName}
          rows={Number(row)}
        />
        {endIcon && (
          <span className="material-icons input-icon end">{endIcon}</span>
        )}
      </div>
      {helperText && (
        <label className="label">
          <span className={labelTextAltClassName}>{helperText}</span>
        </label>
      )}
    </div>
  );
};

export default Input;
