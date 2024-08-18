import React from "react"
import { useStoreOutlet } from "../store/store"

const Layout = () => {
  const {forward,backward,left,right}=useStoreOutlet()
  return (
    <div>
      <React.Fragment>
        <span >
        <button onMouseEnter={()=>left(true)} onMouseLeave={()=>left(false)}>Left</button>
        <button onMouseEnter={()=>backward(true)} onMouseLeave={()=>backward(false)}>Back</button>
        <button onMouseEnter={()=>forward(true)} onMouseLeave={()=>forward(false)}>Up</button>
        <button onMouseEnter={()=>right(true)} onMouseLeave={()=>right(false)}>Right</button>
        </span>
      </React.Fragment>
    </div>
  )
}

export default Layout