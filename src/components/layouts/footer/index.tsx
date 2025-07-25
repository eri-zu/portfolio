"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

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
    <footer
      className="fixed bottom-[1rem] right-[1.5rem] mt-40"
      ref={footerRef}
      style={{ opacity: 0.001 }}
    >
      <div>
        <p className="opacity-40 text-center tracking-wider">
          <span className="text-[1rem] font-en2 tracking-wider">
            &copy; {new Date().getFullYear()} ERI IZUTSU
          </span>
        </p>
      </div>
    </footer>
  );
};
