import { MarchingCube } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import * as THREE from 'three';

export function Metaball ({ color, position, vector = new THREE.Vector3() }) {
    const ref = useRef();
    useFrame((_state, delta) => {
        delta = Math.min(delta, 0.1);
        if (ref?.current === undefined) return;
        ref.current.applyImpulse(
            vector
                ?.copy(ref.current.translation())
                .normalize()
                .multiplyScalar(delta * -0.05)
        );
    });

    return (
        <RigidBody ref={ref} colliders={false} linearDamping={4} angularDamping={0.95} position={position}>
            <MarchingCube strength={0.35} subtract={6} color={color} />
            <BallCollider args={[0.1]} />
        </RigidBody>
    );
}
