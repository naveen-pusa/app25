import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "./Slice"

const Counter = () => {
    let counter = useSelector(state => state.count)
    let dispatch = useDispatch()

    return (
        <>

            <center>
                <h1>counet:{counter}</h1>
                <button className="btn-primary" onClick={() => dispatch(INC())} >INC</button>
                <button className="btn-primary" onClick={() => dispatch(DEC())}>DEC</button>
            </center>
        </>
    )
}
export default Counter