import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, } from "@react-three/drei";
import * as THREE from 'three'


const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
const numParticles = AMOUNTX * AMOUNTY
let positions = new Float32Array(numParticles * 3);
let scales = new Float32Array(numParticles)
let count = 0

let cameraPositionX = 0, cameraPositionY =0;
// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;
// let mouseX = 0, mouseY = 0;



const ParticleWave: React.FC = () => {
    const mesh: any = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const camera: any = useRef()
    // scene = new THREE.Scene();

    let particles = new Array(numParticles).fill('')

    // camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    // camera.position.z = 1000;

    // window.addEventListener('pointermove', (event) => {
    //     if ( event.isPrimary === false ) return;

    //     mouseX = event.clientX - windowHalfX;
    //     mouseY = event.clientY - windowHalfY;


    // });


    // window.addEventListener('resize', () => {

    //     windowHalfX = window.innerWidth / 2;
    //     windowHalfY = window.innerHeight / 2;
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();

    //     // renderer.setSize( window.innerWidth, window.innerHeight );

     


    // })


    useEffect(() => {
        let i = 0, j = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {

            for (let iy = 0; iy < AMOUNTY; iy++) {

                positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
                positions[i + 1] = 0; // y
                positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

                scales[j] = 1;

                i += 3;
                j++;

            }

        }
    }, [])



    useFrame((_state) => {


        let i = 0, j = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {

            for (let iy = 0; iy < AMOUNTY; iy++) {

                positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
                    (Math.sin((iy + count) * 0.5) * 50);

                scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 +
                    (Math.sin((iy + count) * 0.5) + 1) * 20;

                i += 3;
                j++;

            }

        }


        particles.forEach((_, i) => {

            const s = scales[i]


            dummy.position.set(
                positions[i * 3],
                positions[i * 3 + 1],
                positions[i * 3 + 2]
            )

            dummy.scale.set(s, s, s)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })

        mesh.current.instanceMatrix.needsUpdate = true

        count += 0.1;
    })



    return (
        <>
            <PerspectiveCamera 
            ref={camera} 
            manual 
            position={[cameraPositionX, cameraPositionY, 1000]} 
            fov={75} 
            aspect={ window.innerWidth / window.innerHeight} 
            near={1}
            far={10000} 
       
            />


            <instancedMesh ref={mesh} args={[, , numParticles]}>

                <sphereGeometry args={[.06, 100, 100]} />
                <meshStandardMaterial color='#fff' />

            </instancedMesh>


        </>
    );
};








export default ParticleWave;
