import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import frag from "./shader/main.frag";
import vert from "./shader/main.vert";
import { random } from "../../../../../../../utils/math";

export const Particles: React.FC = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positionArray, offsetArray, randomArray } = useMemo(() => {
    const num = 80 * 3;
    const positionArray = new Float32Array(num * 3);
    const offsetArray = new Float32Array(num * 3);
    const randomArray = new Float32Array(num * 4);
    const ww = window.innerWidth;
    const scale = ww > 1440 ? ww / 1440 : 1;

    for (let i = 0; i < num; i++) {
      const i3 = i * 3;
      const i4 = i * 4;

      positionArray[i3] = 0.0;
      positionArray[i3 + 1] = 0.0;
      positionArray[i3 + 2] = 0.0;

      offsetArray[i3] = random(-7, 7) * scale;
      offsetArray[i3 + 1] = random(-4, 4.5) * scale;
      offsetArray[i3 + 2] = random(0, 3) * scale;

      randomArray[i4] = Math.random();
      randomArray[i4 + 1] = Math.random();
      randomArray[i4 + 2] = Math.random();
      randomArray[i4 + 3] = Math.random();
    }

    return { positionArray, offsetArray, randomArray };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 6 },
      uColor1: { value: new THREE.Color("#fff") },
      uColor2: { value: new THREE.Color("rgb(150, 220, 249)") },
      uAlpha: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  useEffect(() => {
    const tl = gsap.timeline();

    if (materialRef.current) {
      tl.to(materialRef.current.uniforms.uAlpha, {
        value: 1.0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <points position={[0, 2.5, 0]} rotation-z={[-Math.PI * 0.05]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positionArray, 3]}
        ></bufferAttribute>
        <bufferAttribute
          attach="attributes-offset"
          args={[offsetArray, 3]}
        ></bufferAttribute>
        <bufferAttribute
          attach="attributes-randomNum"
          args={[randomArray, 4]}
        ></bufferAttribute>
      </bufferGeometry>
      <rawShaderMaterial
        ref={materialRef}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
      ></rawShaderMaterial>
    </points>
  );
};
