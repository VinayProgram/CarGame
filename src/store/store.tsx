import { create } from 'zustand'

type Store = {
    rightMove: boolean
    forwardMove: boolean
    backwardMove: boolean
    leftMove: boolean
    forward: (next:boolean) => void
    backward: (next:boolean) => void
    left: (next:boolean) => void
    right: (next:boolean) => void
    loading:boolean
    setLoading:(next:boolean)=>void
}

export const useStoreOutlet = create<Store>((set) => ({
    rightMove: false,
    forwardMove: false,
    backwardMove: false,
    leftMove: false,
    loading:false,
    forward: (next) => set((state)=>({forwardMove:state.forwardMove=next})),
    backward: (next) => set((state)=>({backwardMove:state.backwardMove=next})),
    left: (next) => set((state)=>({leftMove:state.leftMove=next})),
    right: (next) => set((state)=>({rightMove:state.rightMove=next})),
    setLoading: (next) => set((state)=>({loading:state.loading=next}))
}))