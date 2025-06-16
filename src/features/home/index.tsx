"use client";
import gsap from "gsap";
import { useState, useEffect } from "react";

import style from "./index.module.scss";
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
    <div className={style.wrap}>
      <div className={style.kv}>
        <div className={style.kvInner}>
          <TitleArea data={TitleAreaData[0]} isShow={isShow}></TitleArea>
        </div>
      </div>
    </div>
  );
};
