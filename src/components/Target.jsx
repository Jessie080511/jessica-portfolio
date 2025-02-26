import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three'; // ✅ 确保 THREE 被正确导入

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  // ✅ 遍历模型的所有 mesh，并修改材质
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: '#F4D27A', // 贴合背景的柔和黄色
        metalness: 0.3,
        roughness: 0.6,
      });
    }
  });

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
