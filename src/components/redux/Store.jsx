import { configureStore } from "@reduxjs/toolkit";
import incdec from "./Slice"


export default configureStore({
 
    reducer:{
        count:incdec
    }
})