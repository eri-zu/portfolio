import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef } from "react";

import { Blob } from "./objs/blob";
import { Particles } from "./objs/particles";
import { PlaneWave } from "./objs/planeWave";

import type * as THREE from "three";

export type MainHandle = {
  camera: THREE.PerspectiveCamera | null;
};

export const Main = forwardRef<MainHandle>((_, ref) => {
  // const box = useRef<THREE.Mesh>(null);
  const FBOcamera = useRef<THREE.PerspectiveCamera>(null);

  // 親側から、子の.ref.currentを通じて、
  // 子の「好きな内部データや関数」にアクセスできるようにするための仕組み
  useImperativeHandle(
    ref,
    () => ({
      camera: FBOcamera.current,
    }),
    []
  );

  return (
    <group>
      <OrbitControls camera={FBOcamera.current!} />
      {/* <primitive object={new THREE.AxesHelper(5)}></primitive> */}
      <PerspectiveCamera
        makeDefault
        ref={FBOcamera}
        position={[0, 0, 10]}
        fov={50}
        far={10000}
        near={0.1}
      />
      <Blob></Blob>
      <PlaneWave></PlaneWave>
      <Particles></Particles>
    </group>
  );
});

export default Main;
