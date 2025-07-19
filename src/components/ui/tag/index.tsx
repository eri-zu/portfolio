import style from "./index.module.scss";

import type React from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.tag}>
      <span className={style.tagText}>{children}</span>
    </div>
  );
};
