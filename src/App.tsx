/* eslint-disable react-hooks/exhaustive-deps */
import { Canvas } from "@react-three/fiber"
import Car from "./renderer/car"
import { KeyboardControls, OrbitControls } from "@react-three/drei"
import ThreeSceneEnvironment from "./renderer/threeSceneEnvironment"
import Planets from "./renderer/planets"
import Stars from "./renderer/stars"
import Layout from "./components/layout"
import Loading from "./components/loading"
import { useStoreOutlet } from "./store/store"
import React from "react"
const keyMappings=[
  { name: "forward", keys: ["ArrowUp", "w", "W"] },
  { name: "backward", keys: ["ArrowDown", "s", "S"] },
  { name: "left", keys: ["ArrowLeft", "a", "A"] },
  { name: "right", keys: ["ArrowRight", "d", "D"] },
  { name: "jump", keys: ["Space"] },
]
const App = () => {
 const {setLoading}=useStoreOutlet()
 React.useEffect(()=>{
  setLoading(true)
  setTimeout(()=>setLoading(false),10000)
 },[null]) 

 return (
   <section style={{height:'100vh'}}>
      <KeyboardControls
      map={keyMappings}>
    <Canvas>
    <ThreeSceneEnvironment/>
    <Car/>
    <OrbitControls/>
    <Planets/>
    <Stars/>
    </Canvas>
  </KeyboardControls>
  <span style={{position:'absolute' ,bottom:'10px',display:'flex',justifyContent:'center',width:'100%'}}>
  <Layout/>
  </span>
  <Loading/>
  </section>
  )
}

export default App