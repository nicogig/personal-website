import { MarchingCube } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import * as THREE from 'three';

export function Pointer ({ vector = new THREE.Vector3() }) {
    const ref = useRef();
    useFrame(({ pointer, viewport }) => {
        const { width, height } = viewport.getCurrentViewport();
        vector.set(pointer.x * (width / 2), pointer.y * (height / 2), 0);
        ref.current.setNextKinematicTranslation(vector);
    });

    return (
        <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
            <MarchingCube strength={0.5} subtract={10} color={new THREE.Color('#d8572a')} />
            <BallCollider args={[0.1]} />
        </RigidBody>
    );
}