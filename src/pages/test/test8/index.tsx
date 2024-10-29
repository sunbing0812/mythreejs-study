


import { Canvas, } from '@react-three/fiber'
import Rubik from './Rubik'
import { OrbitControls } from '@react-three/drei'






const test = () => {



    return <Canvas
    >
            < OrbitControls />
       
        <Rubik />


    </Canvas>



}

export default test


