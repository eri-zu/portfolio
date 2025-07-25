"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import { Navigation } from "../navigation";

import type { TitleAreaType } from "../../../types/titleAreaType";
import type React from "react";

type Props = {
  data: TitleAreaType;
  isShow: boolean;
  subLayer?: boolean;
};

export const TitleArea: React.FC<Props> = ({ data, isShow, subLayer }) => {
  const textsRef = useRef<Array<HTMLDivElement>>([]);
  const setRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) textsRef.current[index] = el;
  };

  const show = () => {
    const tl = gsap.timeline();

    textsRef.current.forEach((el, i) => {
      tl
        //
        .to(
          el,
          {
            opacity: 1,
            duration: 1.0,
            ease: "power2.inOut",
          },
          i * 0.1
        );
    });
  };

  useEffect(() => {
    if (isShow) {
      show();
    }
  }, [isShow]);

  return (
    <div>
      <div className="text-center">
        {/* タイトル */}
        <h1
          className="font-en2 text-[2.4rem] font-semibold tracking-widest"
          ref={(el) => {
            setRefs(el, 0);
          }}
          style={{ opacity: 0.001 }}
        >
          {data.title}
        </h1>

        {/* 説明 */}
        <p
          className="mt-[2rem] text-[1.6rem] leading-[1.5] md:leading-[2] tracking-wider font-light"
          ref={(el) => {
            setRefs(el, 1);
          }}
          style={{ opacity: 0.001 }}
          dangerouslySetInnerHTML={{ __html: data.descri }}
        ></p>
      </div>

      {/* ナビゲーション */}
      <div
        className="mt-16"
        ref={(el) => {
          setRefs(el, 2);
        }}
        style={{ opacity: 0.001 }}
      >
        <Navigation data={data.navData} subLayer={subLayer}></Navigation>
      </div>
    </div>
  );
};
