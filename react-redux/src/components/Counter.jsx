import { useDispatch,useSelector } from "react-redux"
import { addAction, reduceAction } from "../redux/counter/action";

export const Counter = ()=>{

    const count = useSelector(state => state.counterReducer.counter);

    const dispatch = useDispatch();

    const handleAdd = ()=>{
        dispatch(addAction(1))
    }

    const handleReduce = ()=>{
        dispatch(reduceAction(1));
    }

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>REDUCE</button>
        </div>
    )
}