import style from "./index.module.scss";

import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerInner}>
        <p className={style.footerText}>
          <small>&copy; {new Date().getFullYear()} ERI IZUTSU</small>
        </p>
      </div>
    </footer>
  );
};
