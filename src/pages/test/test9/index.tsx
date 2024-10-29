
import ParticleWave from './ParticleWave'
import * as THREE from 'three'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'



const test = () => {


    return (
        <Canvas
  

            onCreated={({ gl }) => {
                // console.log(gl);

                // gl.toneMapping = THREE.Uncharted2ToneMapping
                gl.setClearColor(new THREE.Color('#333'))
            }} >
                         < OrbitControls />
            <ambientLight intensity={5} />

            <ParticleWave />
        </Canvas>
    )
}

export default test
