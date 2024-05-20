import React from "react";
import { Bounds, MarchingCubes, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Metaball } from "./Metaball";
import { Pointer } from "./Pointer";
import '../index.css';

export const Home = ({ ref }) => (      <div ref={ref} className="container">
<div className="text urbanist-400 headline">
  Hey! Nice to<br />{localStorage.getItem('visitedBefore') ? <>see</> : <>meet</>} you.
</div>
<Canvas shadows style={{ height: '-webkit-fill-available' }} dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 25 }}>
  <ambientLight intensity={1} />
  <Physics gravity={[0, 2, 0]}>
    <MarchingCubes resolution={80} maxPolyCount={20000} enableColors>
      <meshStandardMaterial vertexColors roughness={0} />
      <Metaball color="#390099" position={[1, 1, 0.5]} />
      <Metaball color="#9e0059" position={[-1, -1, -0.5]} />
      <Metaball color="#ff0054" position={[2, 2, 0.5]} />
      <Metaball color="#ff5400" position={[-2, -2, -0.5]} />
      <Metaball color="#ffbd00" position={[3, 3, 0.5]} />
      <Metaball color="#06d6a0" position={[-3, -3, -0.5]} />
      <Metaball color="#ef476f" position={[4, 4, 0.5]} />
      <Metaball color="#118ab2" position={[-4, -4, -.5]} />
      <Pointer />
    </MarchingCubes>
  </Physics>
  <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rosendal_park_sunset_puresky_1k.hdr" />
  <Bounds fit clip observe margin={1}>
    <mesh visible={false}>
      <boxGeometry />
    </mesh>
  </Bounds>
</Canvas>
</div>);