"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import style from "./index.module.scss";
import { useAnimationStore } from "../../../stores/animationStore";

import type React from "react";

export const AnimationControlButton: React.FC = () => {
  const isAnimation = useAnimationStore((s) => s.isAnimation);
  const setIsAnimation = useAnimationStore((s) => s.setIsAnimation);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    setIsAnimation(!isAnimation);
  };

  useGSAP(() => {
    gsap.to(buttonRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power2.inOut",
      delay: 0.1 * 4,
    });
  });

  return (
    <button
      type="button"
      className={style.button}
      onClick={onClick}
      ref={buttonRef}
      style={{ opacity: 0.001 }}
    >
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={isAnimation ? "Pause animation" : "Play animation"}
      >
        {isAnimation ? (
          <g>
            <rect x="18.5" y="16" width="4" height="19" rx="2" fill="#fff" />
            <rect x="27.5" y="16" width="4" height="19" rx="2" fill="#fff" />
          </g>
        ) : (
          <path
            d="M32.2664 24.1103C32.991 24.4822 32.991 25.5178 32.2664 25.8897L21.9566 31.1807C21.2911 31.5222 20.5 31.039 20.5 30.291L20.5 19.709C20.5 18.961 21.2911 18.4778 21.9566 18.8193L32.2664 24.1103Z"
            fill="#fff"
          />
        )}
      </svg>
    </button>
  );
};
