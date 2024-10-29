


import { Canvas, } from '@react-three/fiber'
import Particles from './Particles'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'





const test = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const mouse = useRef([0, 0])


    return <Canvas
        linear
        dpr={[1, 2]}
        camera={{ fov: 30, position: [0, 0, 150] }}
        onCreated={({ gl }) => {
            // console.log(gl);

            // gl.toneMapping = THREE.Uncharted2ToneMapping
            gl.setClearColor(new THREE.Color('#fff'))
        }}
    >
        < OrbitControls />

        <ambientLight intensity={5} />
        <fog attach="fog" args={['white', 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Particles count={isMobile ? 1000 : 1000} mouse={mouse} />


    </Canvas>



}

export default test


