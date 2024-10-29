


import { Canvas } from '@react-three/fiber'
import { OrbitControls, SpotLight, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'




// function Light() {

//     const ref = useRef<THREE.PointLight>(null!)
//     useHelper(ref, THREE.PointLightHelper, 0.5, 'red')

//     const { position, color, intensity, distance,decay } = useControls({
//         position: {
//             x: 1,
//             y: 1,
//             z: 1
//         },
//         color: '#ff0000',
//         intensity: 0.5,
//         distance:3,
//         decay:2
//     })
//     return <pointLight
//         ref={ref}
//         position={[position.x, position.y,position.z]}
//         intensity={intensity}
//         distance={distance}
//         decay={decay}
//         color={color}
//          />


// }


function Light() {

    const ref = useRef<THREE.SpotLight>(null!)
    useHelper(ref, THREE.SpotLightHelper, 'red')

    const {  color, distance,angle,attenuation,anglePower } = useControls({
        position: {
            x: 1,
            y: 1,
            z: 1
        },
        color: '#ff0000',
        distance:6,
        attenuation:2.2,
        angle:1,
        anglePower:1

    })
    return <SpotLight
        ref={ref}
        distance={distance}
        color={color}
        attenuation={attenuation}
        angle={angle}
        anglePower={anglePower}
         />


}

const test = () => {



    return <Canvas
        camera={{ position: [0, 3, 3] }}
    >


        {/* 轨道控制 */}
        < OrbitControls />
        <Light/>

        {/* <ambientLight intensity={0.2} />
        <directionalLight intensity={0.5} position={[3, 3, 3]}  color='red'/>
        <directionalLight intensity={0.5} position={[0, 3, -3]}  color='green'/>
        <directionalLight intensity={0.5} position={[-3, 3, 3]}  color='blue'/>  */}






        <mesh rotation-y={Math.PI / 4} >
            <boxGeometry />
            <meshStandardMaterial color='white' />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color='white' />
        </mesh>

    </Canvas>



}

export default test


