"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Procedural AI chip with glowing pins and circuit traces */
export function AIChip() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const pins = useMemo(() => {
    const result: THREE.Vector3[] = [];
    const count = 8;
    const spacing = 0.18;
    const offset = ((count - 1) * spacing) / 2;

    // Pins on all four sides
    for (let i = 0; i < count; i++) {
      const pos = i * spacing - offset;
      result.push(new THREE.Vector3(pos, 0, 0.65)); // front
      result.push(new THREE.Vector3(pos, 0, -0.65)); // back
      result.push(new THREE.Vector3(0.65, 0, pos)); // right
      result.push(new THREE.Vector3(-0.65, 0, pos)); // left
    }
    return result;
  }, []);

  return (
    <group ref={groupRef} position={[-3, -0.5, -1]}>
      {/* Chip body */}
      <mesh>
        <boxGeometry args={[1, 0.12, 1]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Chip die (inner square) */}
      <mesh position={[0, 0.065, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.5]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Grid lines on chip die */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={`grid-h-${i}`} position={[x, 0.076, 0]}>
          <boxGeometry args={[0.005, 0.001, 0.5]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
      {[-0.15, 0, 0.15].map((z, i) => (
        <mesh key={`grid-v-${i}`} position={[0, 0.076, z]}>
          <boxGeometry args={[0.5, 0.001, 0.005]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1}
          />
        </mesh>
      ))}

      {/* Pins */}
      {pins.map((pos, i) => (
        <mesh key={`pin-${i}`} position={pos}>
          <boxGeometry args={[0.04, 0.02, 0.04]} />
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}
