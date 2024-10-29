


import { Canvas } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei'




// function Box(props: ThreeElements['points']) {
//     const points = useRef<THREE.Points>(null!)


//     useFrame((state, delta) => {

//         const elapsedTime = state.clock.elapsedTime;
//         points.current.rotation.y = elapsedTime * 0.3;
//         points.current.rotation.x = elapsedTime * 0.3;
//         points.current.rotation.z = elapsedTime * 0.3;

//         // ref.current.rotation.x += delta
//         // ref.current.rotation.y += delta
//         // ref.current.rotation.z += delta
//     })





//     return (
//         <points
//             {...props}
//             ref={points}
//         >
//             <pointsMaterial
//                 attach="material"
//                 size={.005}
//                 depthWrite={false}
//                 sizeAttenuation={true}
//                 color={'#fff'}
//                 transparent={true}
//             />


//             <sphereGeometry args={[2, 200, 100]} />
//         </points>
//     )
// }




const test = () => {



    return <Canvas camera={{ position: [0, 3, 8] }}>


        {/* 轨道控制 */}
        < OrbitControls />

        {/* 光 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 3, 5]} intensity={.5} />



        <mesh position-x={-1}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color='hotpink' />

        </mesh>

        <mesh position-x={1} position-z={-1}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color='hotpink' />

        </mesh>





    </Canvas>



}

export default test


