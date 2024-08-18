/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Environment, useEnvironment } from '@react-three/drei'
import React from 'react'

const ThreeSceneEnvironment = () => {
  const texture=useEnvironment({path:'/stars'})
  console.log(texture)
  return (
    <React.Fragment>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Environment map={texture} background></Environment>
    <cubeCamera>
      {/* @ts-ignore */}
      {(texture)=>(<Environment map={texture}/>)}
    </cubeCamera>
    </React.Fragment>
  )
}

export default ThreeSceneEnvironment