"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

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
    <div className="pt-[18rem] md:pt-[20.3rem] pb-[15rem] relative z-10">
      {/* inner */}
      <div className="max-w-[108rem+4rem+4rem] mx-auto px-[2rem] md:px-[4rem]">
        <TitleArea data={data} isShow={isShow} subLayer={true}></TitleArea>

        <div
          className="relative mt-[6rem] sm:mt-[10rem]"
          style={{ opacity: 0.001 }}
          ref={contentsRef}
        >
          <ul className="flex flex-wrap gap-y-[3rem] gap-x-[2rem] md:gap-[6rem]">
            {worksData.map((el, i) => {
              return (
                <li
                  className="w-[calc(100%/2-2rem/2)] md:w-[calc(100%/3-6rem*2/3)]"
                  key={`${i}`}
                >
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
