import React from "react"
import { useStoreOutlet } from "../store/store"

const Layout = () => {
  const {forward,backward,left,right}=useStoreOutlet()
  return (
    <div>
      <React.Fragment>
        <span >
        <button  onTouchStart={()=>left(true)} onTouchEnd={()=>left(false)}>Left</button>
        <button onTouchStart={()=>backward(true)} onTouchEnd={()=>backward(false)}>Back</button>
        <button onTouchStart={()=>forward(true)} onTouchEnd={()=>forward(false)}>Up</button>
        <button  onTouchStart={()=>right(true)} onTouchEnd={()=>right(false)}>Right</button>
        </span>
      </React.Fragment>
    </div>
  )
}

export default Layout