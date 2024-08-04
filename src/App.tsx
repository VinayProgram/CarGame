import { Canvas } from "@react-three/fiber"
import Car from "./renderer/car"
import { Environment, KeyboardControls, OrbitControls } from "@react-three/drei"
import Layout from "./components/layout"

const App = () => {
  return (
    <section style={{height:'100vh'}}>
       <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
    <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Environment
      files="/victoria_sunset_4k.hdr"
      ground={{ height: 15, radius: 100, scale: 100 }} 
    />
    <Car/>
    <OrbitControls/>
    </Canvas>
  </KeyboardControls>
  <Layout/>
  </section>
  )
}

export default App