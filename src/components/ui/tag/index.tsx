import type React from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div className="inline-block px-[0.4rem] py-[0.2rem] border border-[var(--color-white)]">
      <span className="tracking-wider text-[1.2rem]">{children}</span>
    </div>
  );
};
