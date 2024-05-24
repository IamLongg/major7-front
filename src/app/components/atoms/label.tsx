import classnames from "classnames";
import React from "react";

export interface ILabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  className?: string;
  mode?: "heading" | "title" | "subtitle" | "note";
}

const Label: React.FC<ILabelProps> = ({
  text,
  className,
  mode = "subtitle",
}) => {
  const classNames = classnames("not-italic leading-snug", {
    ["text-white text-[52px] font-bold !leading-[68px]"]: mode === "heading",
    ["text-black text-[40px] !font-semibold"]: mode === "title",
    ["text-black text-xl !font-normal"]: mode === "subtitle",
    ["text-gray-light text-2xl !font-semibold"]: mode === "note",
    [className as string]: className,
  });
  return <p className={classNames}>{text}</p>;
};

export default Label;
