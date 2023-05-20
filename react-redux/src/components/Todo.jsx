import { useEffect } from "react";
import { TodoInput } from "./TodoInput"
import axios from "axios";
import { shallowEqual ,useDispatch, useSelector } from "react-redux";
import { TodoFailureAction, TodoRequestAction, getTodoSuccessAction } from "../redux/todos/action";

export const Todo = ()=>{
    const {todos,isLoading,isError} = useSelector((store)=>{
        return {
            todos:store.todosReducer.todos,
            isLoading: store.todosReducer.isLoading,
            isError: store.todosReducer.isError,
    };
},shallowEqual);
    
    const dispatch = useDispatch();

    const getTodos = ()=>{
        dispatch(TodoRequestAction());
        axios.get(" http://localhost:8000/todos")
        .then((res)=>{
            console.log(res);
            dispatch(getTodoSuccessAction(res.data));
        })
        .catch((err)=>{
            console.log(err.message);
            dispatch(TodoFailureAction());
        })
    }

    useEffect(()=>{
        getTodos();
    },[]);

    return (
        <div>
            <TodoInput />
            {
                isLoading && <h1>Loading...</h1>
            }
            {
                isError? <h1>Something went wrong</h1> :
            
                todos.length && todos.map((el)=>{
                    return (
                        <div key={el.id}>{el.title} --- {el.status ? "True" : "False"}</div>
                    )
                })
            }
        </div>
    )
}