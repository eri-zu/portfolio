import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import frag from "./shader/main.frag";
import vert from "./shader/main.vert";
import { useGLStore } from "../../../../../../stores/glStore";

import type React from "react";

export const Blob: React.FC = () => {
  const blobRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const blobVisible = useGLStore((s) => s.blobVisible);

  useEffect(() => {
    if (blobRef.current && materialRef.current) {
      const tl = gsap.timeline({ delay: 0.2 });

      const scale = blobVisible ? 1 : 0.3;
      const y = blobVisible ? 1.4 : 2;

      tl
        //
        .to(blobRef.current.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 1.5,
          ease: "expo.out",
        })
        .to(
          blobRef.current.position,
          {
            y: y,
            duration: 1.5,
            ease: "expo.out",
          },
          0
        );
    }
  }, [blobVisible]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 0.5 },
      uFreq: { value: 5 },
      uAmp: { value: 5 },
      uStrength: { value: 0.1 },
      uNoiseSize: { value: 1 },
      uBrightness: { value: new THREE.Vector3(0.5, 0.5, 0.5) },
      uContrast: { value: new THREE.Vector3(0.5, 0.5, 0.5) },
      uOscilation: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
      uPhase: { value: new THREE.Vector3(0.18, 0.24, 0.3) },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      position={[0, 1.4, 4]}
      // rotation-z={[-Math.PI * 0.1]}
      rotation-x={-Math.PI * 0.02}
      // rotation-x={Math.PI * 0.2}
      ref={blobRef}
      scale={0}
    >
      <sphereGeometry args={[0.6, 150, 150]} />
      <rawShaderMaterial
        ref={materialRef}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        transparent
      ></rawShaderMaterial>
    </mesh>
  );
};
