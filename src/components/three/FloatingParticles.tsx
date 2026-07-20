"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Floating glowing particles in the scene */
export function FloatingParticles({ count = 400 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const cyan = new THREE.Color("#06b6d4");
    const violet = new THREE.Color("#8b5cf6");
    const pink = new THREE.Color("#ec4899");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const colorChoice = Math.random();
      const color =
        colorChoice < 0.5 ? cyan : colorChoice < 0.8 ? violet : pink;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const array = pos.array as Float32Array;
      const time = clock.elapsedTime;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        array[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
        array[i3] += Math.cos(time * 0.2 + i * 0.05) * 0.001;
      }
      pos.needsUpdate = true;

      meshRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
