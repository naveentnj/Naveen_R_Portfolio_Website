"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Animated digital grid floor with glowing intersections */
export function DigitalGrid() {
  const groupRef = useRef<THREE.Group>(null);

  const intersections = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const gridSize = 10;
    const spacing = 2;

    for (let x = -gridSize; x <= gridSize; x += spacing) {
      for (let z = -gridSize; z <= gridSize; z += spacing) {
        if (Math.random() > 0.6) {
          points.push(new THREE.Vector3(x, -2.5, z));
        }
      }
    }
    return points;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Grid */}
      {/* @ts-ignore — R3F material piercing */}
      <gridHelper
        args={[30, 30, "#06b6d4", "#0c0e14"]}
        position={[0, -2.5, 0]}
      />

      {/* Glowing intersection dots */}
      {intersections.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}
