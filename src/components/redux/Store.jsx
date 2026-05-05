

import { configureStore } from "@reduxjs/toolkit";
import naveen from "./Slice"




export default configureStore({
    reducer:{
        count:naveen
    }
})