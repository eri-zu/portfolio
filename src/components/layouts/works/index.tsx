"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

import style from "./index.module.scss";
import { AnimationSetShow } from "../../../../utils/animation";
import { Card } from "../../ui/card";
import { TitleArea } from "../titleArea";

import type { TitleAreaType } from "../../../types/titleAreaType";
import type { ExperimentType, ClientWorksType } from "../../../types/works";
import type React from "react";

type Props = {
  data: TitleAreaType;
  worksData: Array<ExperimentType | ClientWorksType>;
};

export const Works: React.FC<Props> = ({ data, worksData }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const contentsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    AnimationSetShow();

    const tl = gsap.timeline();
    setIsShow(true);

    tl.to(
      contentsRef.current,
      {
        opacity: 1,
        duration: 1.0,
        ease: "power2.inOut",
      },
      0.1 * 3
    );
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.inner}>
        <TitleArea data={data} isShow={isShow} subLayer={true}></TitleArea>

        <div
          className={style.contents}
          style={{ opacity: 0.001 }}
          ref={contentsRef}
        >
          <ul className={style.list}>
            {worksData.map((el, i) => {
              return (
                <li className={style.item} key={`${i}`}>
                  <Card data={el}></Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
