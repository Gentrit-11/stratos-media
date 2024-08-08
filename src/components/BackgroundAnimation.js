// src/components/BackgroundAnimation.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const RotatingSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#1E2F97"
        attach="material"
        distort={0.3}
        speed={2}
      />
    </Sphere>
  );
};

const BackgroundAnimation = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <RotatingSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default BackgroundAnimation;
