"use client";

import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./experience";
import style from "./index.module.scss";

import type React from "react";

export const Gl: React.FC = () => {
  return (
    <>
      <div className={style.canvasWrap}>
        <Canvas flat linear>
          <OrthographicCamera
            makeDefault
            position={[0, 0, 2]}
            near={0.1}
            far={100}
            zoom={1}
          />
          <Experience />
        </Canvas>
      </div>
    </>
  );
};
