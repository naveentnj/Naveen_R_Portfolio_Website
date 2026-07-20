"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { NeuralNetwork } from "./NeuralNetwork";
import { AIChip } from "./AIChip";
import { CircuitTraces } from "./CircuitTraces";
import { FloatingParticles } from "./FloatingParticles";
import { RoboticArm } from "./RoboticArm";
import { DigitalGrid } from "./DigitalGrid";

/** Camera that subtly follows mouse */
function AnimatedCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ mouse }) => {
    if (cameraRef.current) {
      cameraRef.current.position.x +=
        (mouse.x * 0.5 - cameraRef.current.position.x) * 0.02;
      cameraRef.current.position.y +=
        (mouse.y * 0.3 + 0.5 - cameraRef.current.position.y) * 0.02;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0.5, 7]}
      fov={50}
      near={0.1}
      far={100}
    />
  );
}

/** Complete hero 3D scene */
export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <AnimatedCamera />

          {/* Lighting */}
          <ambientLight intensity={0.15} />
          <pointLight
            position={[5, 5, 5]}
            color="#06b6d4"
            intensity={0.8}
          />
          <pointLight
            position={[-5, 3, -5]}
            color="#8b5cf6"
            intensity={0.5}
          />
          <pointLight
            position={[0, -3, 3]}
            color="#ec4899"
            intensity={0.3}
          />

          {/* Scene Elements */}
          <FloatingParticles count={350} />
          <NeuralNetwork />
          <AIChip />
          <CircuitTraces />
          <RoboticArm />
          <DigitalGrid />

          {/* Fog for depth */}
          <fog attach="fog" args={["#06070a", 5, 25]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
