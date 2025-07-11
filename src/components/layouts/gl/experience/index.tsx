import { useFBO } from "@react-three/drei";
import { useThree, createPortal, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import Main from "./main";
import frag from "./shader/main.frag";
import vert from "./shader/main.vert";

import type { MainHandle } from "./main";
import type React from "react";

export const Experience: React.FC = () => {
  const { size } = useThree();

  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const mainRef = useRef<MainHandle | null>(null);

  const ww = window.innerWidth;

  const FBOScene = useMemo(() => {
    const scene = new THREE.Scene();
    return scene;
  }, []);

  const fbo = useFBO();

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }

    if (mainRef.current && mainRef.current.camera) {
      state.gl.setRenderTarget(fbo);
      state.gl.render(FBOScene, mainRef.current.camera);
      state.gl.setRenderTarget(null);
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: fbo.texture },
      uProgress: { value: 0 },
      uScale: { value: 1.0 },
      isBaseScanLine: { value: true },
      isGrainNoise: { value: true },
      isColorShift: { value: true },
      uShift1: { value: ww > 768 ? 0.04 * 0.15 : 0.04 * 0.45 },
      uShift2: { value: ww > 768 ? 0.01 * 0.15 : 0.01 * 0.45 },
      uShift3: { value: ww > 768 ? 0.03 * 0.15 : 0.03 * 0.45 },
    }),
    [fbo.texture]
  );

  return (
    <>
      {createPortal(<Main ref={mainRef}></Main>, FBOScene)}

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[size.width, size.height, 100, 100]} />
        <rawShaderMaterial
          ref={materialRef}
          vertexShader={vert}
          fragmentShader={frag}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};
