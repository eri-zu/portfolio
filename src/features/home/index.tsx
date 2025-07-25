"use client";
import gsap from "gsap";
import { useState, useEffect } from "react";

import { AnimationSetShow } from "../../../utils/animation";
import { TitleArea } from "../../components/layouts/titleArea";
import { TitleAreaData } from "../../constants/titleAreaData";
import { useGLStore } from "../../stores/glStore";

import type React from "react";

export const Index: React.FC = () => {
  const setBlobVisible = useGLStore((s) => s.setBlobVisible);

  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    AnimationSetShow();

    const tl = gsap.timeline();

    tl
      //
      .add(() => {
        setBlobVisible(true);
      })
      //
      .add(() => {
        setIsShow(true);
      }, 0.03);
  }, []);

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <div className="absolute left-1/2 top-[calc(50%+12.5vh)] -translate-x-1/2 -translate-y-1/2 z-1">
        <div>
          <TitleArea data={TitleAreaData[0]} isShow={isShow}></TitleArea>
        </div>
      </div>
    </div>
  );
};
