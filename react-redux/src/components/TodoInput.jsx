import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { TodoFailureAction, TodoRequestAction, postTodoSuccessAction } from "../redux/todos/action";


export const TodoInput = ()=>{
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const newTodo = {
            title,
            status:false
        }
        dispatch(TodoRequestAction());
        axios.post("  http://localhost:8000/todos",newTodo)
        .then((res)=>{
            console.log(res);
            dispatch(postTodoSuccessAction(res.data));
        })
        .catch((err)=>{
            console.log(err.message);
            dispatch(TodoFailureAction());
        })
    }

    const postTodo = ()=>{
        handleAddTodo();
        setTitle("");
    }

    return (
        <div>
            <h1>Todo Input</h1>
            <input type="text" placeholder="Add todo" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={postTodo}>Add Todo</button>
        </div>
    )
}