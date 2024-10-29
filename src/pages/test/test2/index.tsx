


import { Canvas } from '@react-three/fiber'
import { Grid, OrbitControls, Stats, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls, Leva } from 'leva'


function Box() {

    const ref = useRef<THREE.Mesh>(null!)
    useHelper(ref, THREE.BoxHelper, 'red')

    const { position, color, transparent, opacity } = useControls({
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        color: '#ff0000',
        opacity: {
            value: 1,
            min: 0,
            max: 1,
            step: 0.01
        },
        transparent: true
    })
    return <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <boxGeometry />
        <meshBasicMaterial
            color={color}
            transparent={transparent}
            opacity={opacity}
        />
    </mesh>


}


const test = () => {



    return <Canvas camera={{ position: [3, 3, 3] }}>
        <Leva hidden />

        {/* 轨道控制 */}
        < OrbitControls />
        <Stats />


        <Box />

        <axesHelper />

        <Grid
            sectionSize={3}
            sectionColor={'purple'}
            sectionThickness={1}
            cellSize={1}
            cellColor={'#6f6f6f'}
            cellThickness={0.6}
            infiniteGrid
            fadeDistance={50}
            fadeStrength={5}
        />



    </Canvas>



}

export default test


