

import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "./Slice"








const Counter = () => {

    let counter = useSelector(state => state.count)
    let dispatch = useDispatch()
    return(

        <>
            <center>
                <h1>value:{counter}</h1>
                <button className=" btn btn-primary" onClick={() =>  dispatch(INC()) }>INC</button>
                <button className=" btn btn-danger" onClick={() =>  dispatch(DEC()) }>DEC</button>
            </center>
        </>

    )
}
export default Counter