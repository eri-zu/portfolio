"use client";

import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./experience";

import type React from "react";

export const Gl: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
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
  );
};
