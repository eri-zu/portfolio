import classNames from "classnames";
import Link from "next/link";

import style from "./index.module.scss";

import type { ReactNode } from "react";
import type React from "react";
type Props = {
  children: ReactNode;
  subLayer?: boolean;
  href: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  subLayer,
  href,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={classNames([style.button, subLayer && style["--subLayer"]])}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  );
};
