import React from "react"
import { useStoreOutlet } from "../store/store"

const Loading = () => {
    const {loading}=useStoreOutlet()
  return (
    <React.Fragment>
    <span style={{position:'absolute' ,bottom:'50%',display: loading?'grid':'none',justifyContent:'center',width:'100%'}}>
      <span className="loader">Loading...</span>
    <p className="intro">
        Hi, I'm Vinay Tandale, a Software Developer with expertise in Three.js, WebGL, and MERN stack. Let's build something amazing! Contact me at 7666949043 or vinaytandale@gmail.com
      </p>
     </span>
     </React.Fragment>
  )
}

export default Loading