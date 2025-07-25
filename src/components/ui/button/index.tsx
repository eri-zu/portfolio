import Link from "next/link";

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
      className="uppercase block text-[var(--color-white)] border border-[var(--color-white)] text-[1.4rem] rounded-full px-8 pt-4 pb-4 tracking-wider bg-white/15 cursor-pointer whitespace-nowrap button-glow "
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  );
};
