"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import style from "./index.module.scss";

import type React from "react";

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(footerRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power2.inOut",
      delay: 0.1 * 4,
    });
  });

  return (
    <footer className={style.footer} ref={footerRef} style={{ opacity: 0.001 }}>
      <div className={style.footerInner}>
        <p className={style.footerText}>
          <small>&copy; {new Date().getFullYear()} ERI IZUTSU</small>
        </p>
      </div>
    </footer>
  );
};
