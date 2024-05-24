"use client";
import classNames from "classnames";
import * as React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  mode?: "primary" | "secondary" | "danger" | "light" | "dangerlight";
  outline?: boolean;
  border?: boolean;
  isShow?: boolean;
  boxShadow?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  labelClassNames?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  sizeText?: "xs" | "sm" | "xl" | "2xl" | "base";
  multipleBtn?: boolean;
  textBtnPrimary?: string;
  textBtnSecondary?: string;
}

const Button: React.FC<IButtonProps> = ({
  mode = "primary",
  type = "button",
  label,
  className,
  disabled,
  labelClassNames,
  handleClick = () => void 0,
  sizeText = "base",
  textBtnPrimary,
  textBtnSecondary,
  multipleBtn = false,
}) => {
  const classNamesProps = classNames(
    "flex items-center justify-center font-semibold text-base bg-primary text-black cursor-pointer",
    {
      ["text-white py-3 px-6 bg-orange rounded-[20px]"]: mode === "primary",
      ["text-black py-[17px] px-8 bg-white rounded-3xl"]: mode === "secondary",
      ["text-xs"]: sizeText === "xs",
      ["text-sm"]: sizeText === "sm",
      ["text-xl"]: sizeText === "xl",
      ["text-2xl"]: sizeText === "2xl",
      [className as string]: className,
    }
  );
  const classNamesMultiProps = classNames(
    "flex gap-4 flex-row-reverse justify-end",
    {
      [className as string]: className,
    }
  );

  return multipleBtn ? (
    <div className={classNamesMultiProps}>
      <button
        onClick={handleClick}
        type={type}
        className={`${classNamesProps} text-white py-4 px-8 bg-orange rounded-[20px]`}
        disabled={disabled}
      >
        <span className={labelClassNames}>{textBtnPrimary}</span>
      </button>
      <button
        onClick={handleClick}
        type={type}
        className={`${classNamesProps} text-blackOd py-4 px-8 bg-white rounded-3xl`}
        disabled={disabled}
      >
        <span className={labelClassNames}>{textBtnSecondary}</span>
      </button>
    </div>
  ) : (
    <button
      onClick={handleClick}
      type={type}
      className={classNamesProps}
      disabled={disabled}
    >
      <span className={labelClassNames}>{label}</span>
    </button>
  );
};

export default Button;
