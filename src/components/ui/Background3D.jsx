import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from "@react-three/drei";

function FloatingCluster() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-1.6, 0.2, 0]}>
          <MeshDistortMaterial
            color="#38bdf8"
            distort={0.35}
            speed={2}
            roughness={0.05}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
      <Float speed={1.8} rotationIntensity={1.6} floatIntensity={1.4}>
        <Sphere args={[0.72, 64, 64]} position={[1.15, 0.8, -0.8]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.45}
            speed={2.4}
            roughness={0.15}
            metalness={0.7}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.8}>
        <Sphere args={[0.42, 64, 64]} position={[0.5, -0.95, 0.35]}>
          <MeshDistortMaterial
            color="#67e8f9"
            distort={0.55}
            speed={3}
            roughness={0.18}
            metalness={0.6}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Background3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 55 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} color="#38bdf8" />
        <directionalLight position={[-2, -1, 2]} intensity={1.1} color="#8b5cf6" />
        <Suspense fallback={null}>
          <Stars radius={80} depth={30} count={1200} factor={4} saturation={0} fade speed={0.8} />
          <FloatingCluster />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.45} enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-base/15 to-base" />
    </div>
  );
}

export default Background3D;
