


import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
// import { LittlestTokyo } from './LittlestTokyo-transformed'


function LittlestTokyo({ ...props }) {
    // This hook gives you offets, ranges and other useful things
    const scroll = useScroll()
    const { scene, nodes, animations } = useGLTF('/src/pages/test/test5/LittlestTokyo-transformed.glb')
    const { actions }: any = useAnimations(animations, scene)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
    useFrame((state, delta) => {
        const action = actions['Take 001']
        // The offset is between 0 and 1, you can apply it to your models any way you like
        const offset = 1 - scroll.offset
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
        state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
        state.camera.lookAt(0, 0, 0)
    })
    return <primitive object={scene} {...props} />
}

useGLTF.preload('/src/pages/test/test5/LittlestTokyo-transformed.glb')
const test = () => {



    return <Canvas shadows camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={3} />
        <fog attach="fog" args={['#ff5020', 5, 18]} />
        <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <Sky distance={20} sunPosition={[2, 0.4, 10]} />
        <Suspense fallback={null}>
            {/* Wrap contents you want to scroll into <ScrollControls> */}
            <ScrollControls pages={3}>
                <LittlestTokyo scale={0.02} position={[0, 2.5, 0]} />
            </ScrollControls>
        </Suspense>
    </Canvas>



}




export default test


