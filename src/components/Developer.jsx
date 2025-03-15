import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // ✅ 加载新的 GLB 模型
  const { scene } = useGLTF('/models/animations/model.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // ✅ 检查 nodes 和 materials
  console.log("🔍 Nodes:", nodes);
  console.log("🎨 Materials:", materials);

  // ✅ 绑定 FBX 动画
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group,
  );

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.5).play();
    return () => actions[animationName]?.fadeOut(0.5);
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />

      {/* ✅ 设置模型材质，确保有颜色 */}
      <skinnedMesh
        geometry={nodes.Character_Body.geometry}
        material={materials.BodyMaterial || new THREE.MeshStandardMaterial({
          color: "#d2b48c", // 奶茶色
          metalness: 0.3,
          roughness: 0.8,
        })}
        skeleton={nodes.Character_Body.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Character_Hair.geometry}
        material={materials.HairMaterial || new THREE.MeshStandardMaterial({
          color: "#593C1F", // 棕色头发
          metalness: 0.2,
          roughness: 0.9,
        })}
        skeleton={nodes.Character_Hair.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Character_Clothes.geometry}
        material={materials.ClothesMaterial || new THREE.MeshStandardMaterial({
          color: "#8B5E3C", // 咖啡色衣服
          metalness: 0.1,
          roughness: 0.7,
        })}
        skeleton={nodes.Character_Clothes.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Character_Shoes.geometry}
        material={materials.ShoesMaterial || new THREE.MeshStandardMaterial({
          color: "#FFFFFF", // 白色鞋子
          metalness: 0.05,
          roughness: 0.9,
        })}
        skeleton={nodes.Character_Shoes.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Character_Eyes.geometry}
        material={materials.EyesMaterial || new THREE.MeshStandardMaterial({
          color: "#3D3D3D", // 深色眼睛
          metalness: 0.5,
          roughness: 0.2,
        })}
        skeleton={nodes.Character_Eyes.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/model.glb');

export default Developer;


