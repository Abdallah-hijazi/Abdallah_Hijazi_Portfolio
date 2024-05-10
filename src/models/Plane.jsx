import { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);
    
    useEffect(() => {
      if (isRotating) {
        actions['Take001'].play();
      } else {
        actions['Take001'].stop(); 
      }
    }, [actions, isRotating])
    
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane