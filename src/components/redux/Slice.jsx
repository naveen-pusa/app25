import { createSlice } from "@reduxjs/toolkit"



    let Slice = createSlice({
        name:'count',
        initialState:0,
        reducers:{
            INC:(state,action)=>(state+1),
            DEC:(state,action)=>(state-1)
        }
    })
   
    

export const {INC,DEC} = Slice.actions
export default Slice.reducer