import classnames from "classnames";
import React, { HTMLAttributes } from "react";

export interface IContainer extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
}

const Container: React.FC<IContainer> = ({ className, children }) => {
  const classNames = classnames("max-w-[1920px] px-[362px]", {
    [className as string]: className,
  });
  return <div className={classNames}>{children}</div>;
};

export default Container;
