import classNames from "classnames";

import style from "./index.module.scss";

import type React from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={classNames([
        style.tag,
        (children === "Next.js" || children === "TypeScript") && style.isWhite,
      ])}
    >
      <span className={style.tagText}>{children}</span>
    </div>
  );
};
