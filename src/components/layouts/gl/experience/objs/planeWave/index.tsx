import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import frag from "./shader/main.frag";
import vert from "./shader/main.vert";
import { useAnimationStore } from "../../../../../../stores/animationStore";

import type React from "react";

export const PlaneWave: React.FC = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const isAnimation = useAnimationStore((s) => s.isAnimation);

  useFrame((state, delta) => {
    if (!isAnimation) return;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBrightness: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
      uContrast: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
      uOscilation: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
      uPhase: { value: new THREE.Vector3(0.18, 0.24, 0.3) },
    }),
    []
  );

  useEffect(() => {
    const tl = gsap.timeline();

    if (materialRef.current && meshRef.current) {
      tl
        //
        .to(materialRef.current.uniforms.uBrightness.value, {
          x: 0.5,
          y: 0.5,
          z: 0.5,
          duration: 1.2,
          ease: "power2.out",
        })
        .to(
          materialRef.current.uniforms.uContrast.value,
          {
            x: 0.5,
            y: 0.5,
            z: 0.5,
            duration: 1.2,
            ease: "power2.out",
          },
          0
        )
        .to(
          meshRef.current.position,
          {
            y: -2,
            duration: 3,
            ease: "power2.out",
          },
          0
        );
    }
  }, []);

  return (
    // -1
    <mesh position={[0, -0.4, 5]} rotation-x={-Math.PI * 0.5} ref={meshRef}>
      <planeGeometry args={[8, 15, 40, 40]} />
      <rawShaderMaterial
        ref={materialRef}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
      ></rawShaderMaterial>
    </mesh>
  );
};
