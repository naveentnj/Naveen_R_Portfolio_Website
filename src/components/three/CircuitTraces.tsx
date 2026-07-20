"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Animated PCB trace lines with flowing signals */
export function CircuitTraces() {
  const groupRef = useRef<THREE.Group>(null);

  const traces = useMemo(() => {
    const paths: { points: THREE.Vector3[]; color: string }[] = [];
    const traceCount = 12;

    for (let i = 0; i < traceCount; i++) {
      const startX = (Math.random() - 0.5) * 10;
      const startZ = (Math.random() - 0.5) * 6;
      const points: THREE.Vector3[] = [];
      let x = startX;
      let z = startZ;

      // Create right-angle PCB-style paths
      const segments = 3 + Math.floor(Math.random() * 4);
      points.push(new THREE.Vector3(x, -2, z));

      for (let s = 0; s < segments; s++) {
        if (s % 2 === 0) {
          x += (Math.random() - 0.5) * 3;
        } else {
          z += (Math.random() - 0.5) * 3;
        }
        points.push(new THREE.Vector3(x, -2, z));
      }

      paths.push({
        points,
        color: Math.random() > 0.5 ? "#06b6d4" : "#8b5cf6",
      });
    }
    return paths;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.05) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {traces.map((trace, i) => {
        const positions = new Float32Array(
          trace.points.flatMap((p) => [p.x, p.y, p.z])
        );
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={trace.color}
              transparent
              opacity={0.2}
            />
          </line>
        );
      })}
    </group>
  );
}
