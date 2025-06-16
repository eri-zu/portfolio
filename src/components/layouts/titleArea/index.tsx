"use client";
import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import style from "./index.module.scss";
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
    <div className={style.textArea}>
      <div className={style.intro}>
        <h1
          className={classNames([style.title, subLayer && style["--subLayer"]])}
          ref={(el) => {
            setRefs(el, 0);
          }}
          style={{ opacity: 0.001 }}
        >
          {data.title}
        </h1>
        <p
          className={classNames([style.lead, subLayer && style["--subLayer"]])}
          ref={(el) => {
            setRefs(el, 1);
          }}
          style={{ opacity: 0.001 }}
          dangerouslySetInnerHTML={{ __html: data.descri }}
        ></p>
      </div>

      <div
        className={classNames([style.navArea, subLayer && style["--subLayer"]])}
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
