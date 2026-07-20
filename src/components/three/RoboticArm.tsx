"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Procedural robotic arm with animated joints */
export function RoboticArm() {
  const groupRef = useRef<THREE.Group>(null);
  const joint1Ref = useRef<THREE.Group>(null);
  const joint2Ref = useRef<THREE.Group>(null);
  const joint3Ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.3;
    }
    if (joint1Ref.current) {
      joint1Ref.current.rotation.z = Math.sin(t * 0.3) * 0.2 - 0.3;
    }
    if (joint2Ref.current) {
      joint2Ref.current.rotation.z = Math.sin(t * 0.4 + 1) * 0.3;
    }
    if (joint3Ref.current) {
      joint3Ref.current.rotation.z = Math.sin(t * 0.5 + 2) * 0.2;
    }
  });

  const jointMaterial = (
    <meshStandardMaterial
      color="#06b6d4"
      emissive="#06b6d4"
      emissiveIntensity={0.3}
      metalness={0.9}
      roughness={0.1}
    />
  );

  const armMaterial = (
    <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
  );

  return (
    <group ref={groupRef} position={[-1.5, -1.5, -3]} scale={0.6}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.3, 16]} />
        {armMaterial}
      </mesh>

      {/* Joint 1 */}
      <group ref={joint1Ref} position={[0, 0.3, 0]}>
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          {jointMaterial}
        </mesh>

        {/* Arm segment 1 */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 1, 8]} />
          {armMaterial}
        </mesh>

        {/* Joint 2 */}
        <group ref={joint2Ref} position={[0, 1.15, 0]}>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            {jointMaterial}
          </mesh>

          {/* Arm segment 2 */}
          <mesh position={[0, 0.45, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.8, 8]} />
            {armMaterial}
          </mesh>

          {/* Joint 3 / End effector */}
          <group ref={joint3Ref} position={[0, 0.9, 0]}>
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              {jointMaterial}
            </mesh>

            {/* Gripper fingers */}
            <mesh position={[-0.08, 0.2, 0]} rotation={[0, 0, 0.2]}>
              <boxGeometry args={[0.03, 0.2, 0.06]} />
              {armMaterial}
            </mesh>
            <mesh position={[0.08, 0.2, 0]} rotation={[0, 0, -0.2]}>
              <boxGeometry args={[0.03, 0.2, 0.06]} />
              {armMaterial}
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
