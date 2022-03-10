import React from 'react'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF } from '@react-three/drei'
import Model from '../assests/usnfinal0.glb'
import { OrbitControls } from '@react-three/drei'
import { SkinnedMesh } from 'three'


function Usn({ ...props }) {
  const ref = useRef()
  useGLTF.preload(Model)
  const { nodes, materials } = useGLTF(Model)
  console.log("nodes",nodes)


   useFrame((state) => {
     const t = state.clock.getElapsedTime()
     ref.current.rotation.set( 0, -0.80,  0)

     ref.current.position.set( 1.3, Math.sin(t * 5)/100,  0)
    
   })

  return (
    <group {...props} dispose={null} style={{background:""}}>
      <group ref={ref}>
        <group position={[-0.16, 0.1, -0.22]} rotation={[0, -Math.PI / 1, 0]}>
          <mesh castShadow geometry={nodes.Circle003.geometry} material={materials['Material.002']} position={nodes.position}/>
          <mesh castShadow geometry={nodes.Circle006.geometry} material={materials['bucket.007']} position={nodes.position} />
          <mesh castShadow geometry={nodes.Cylinder003.geometry} material={materials['label blue.005']} position={nodes.position}/>
          <mesh castShadow geometry={nodes.Cylinder004.geometry} material={materials['bucket.004']} position={nodes.position} />
         
        </group>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <div style={{width:"300px",background:"#f4f4f7",borderRadius:"5px 5px 0px 0px",margin:'40px',    boxShadow: '9px 1px 15px 12px #00000057',}}>
       <div style={{width:"300px",    background: "#ffffff",borderRadius:"0px 0px 5px 5px",padding:'20px',fontFamily:'arial'}}>
        <h4 style={{color:"black",background:"#00b6f4!important",padding:'10px 0px',margin:'0px'}}>
            HYPERBOLIC MASS 4KG
        </h4>
    </div>
    <Canvas shadowsMap dpr={[1, 2]} camera={{ position: [1, 0, 1.2], fov: 15 }} style={{width:"300px",height:'350px'}}>
    <OrbitControls/>
      <ambientLight intensity={0} />
      <spotLight position={[-0.514646, 2.55492, 2.20196]} angle={0.2} penumbra={1} intensity={1} castShadow={true} shadow-mapSize={[2048, 2048]} />
      <spotLight position={[2.56911, 0.4854, 0.698073]} angle={0.2} penumbra={1} intensity={2.5} castShadow={true} shadow-mapSize={[1024, 1024]} />
      <spotLight position={[-0.950928, -0.982624, -0.982624]} angle={0.3} penumbra={1} intensity={2.5} castShadow={true} shadow-mapSize={[256, 256]}  />
      <Suspense fallback={null}>
        <Usn castShadow scale={0.29} position={[0, -0.15, -0.0005]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas>

   

    </div>
  )
}
