import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Center, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const GoldK = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1.5, 0.2]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Center>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 md:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <GoldK />
      </Canvas>
    </div>
  );
}
