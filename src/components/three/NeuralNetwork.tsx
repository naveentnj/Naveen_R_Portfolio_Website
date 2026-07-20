"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Procedural neural network with pulsing nodes and animated connections */
export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions in layers
  const { nodes, connections } = useMemo(() => {
    const layers = [4, 6, 8, 6, 4];
    const nodePositions: THREE.Vector3[] = [];
    const connectionPairs: [number, number][] = [];

    let nodeIndex = 0;
    layers.forEach((count, layerIdx) => {
      const x = (layerIdx - (layers.length - 1) / 2) * 1.8;
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 0.8;
        const z = (Math.random() - 0.5) * 0.5;
        nodePositions.push(new THREE.Vector3(x, y, z));

        // Connect to previous layer
        if (layerIdx > 0) {
          const prevStart =
            nodeIndex -
            count -
            layers[layerIdx - 1] +
            Math.max(0, layers[layerIdx - 1] - 3);
          for (
            let j = nodeIndex - count - layers[layerIdx - 1];
            j < nodeIndex - count;
            j++
          ) {
            if (Math.random() > 0.4 && j >= 0) {
              connectionPairs.push([j, nodeIndex]);
            }
          }
        }
        nodeIndex++;
      }
    });

    return { nodes: nodePositions, connections: connectionPairs };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.08) * 0.05;
    }
  });

  // Build connection lines geometry
  const linePositions = useMemo(() => {
    const positions: number[] = [];
    connections.forEach(([a, b]) => {
      if (nodes[a] && nodes[b]) {
        positions.push(nodes[a].x, nodes[a].y, nodes[a].z);
        positions.push(nodes[b].x, nodes[b].y, nodes[b].z);
      }
    });
    return new Float32Array(positions);
  }, [nodes, connections]);

  return (
    <group ref={groupRef} position={[3, 0.5, -2]}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
