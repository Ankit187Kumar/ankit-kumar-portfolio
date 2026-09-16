"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.4 + Math.random() * 0.8;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4d7dff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function WireframeSphere({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += mouseX * 0.003;
      meshRef.current.rotation.x += mouseY * 0.002;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.1;
      innerRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group>
      {/* Outer wireframe sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshBasicMaterial
          color="#4d7dff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner denser sphere */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.7, 3]} />
        <meshBasicMaterial
          color="#48e0ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color="#4d7dff"
          transparent
          opacity={0.08}
        />
      </mesh>

      <ParticleField />
    </group>
  );
}

export default function HeroOrb({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <WireframeSphere mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}
