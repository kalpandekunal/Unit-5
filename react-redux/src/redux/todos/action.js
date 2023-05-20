import {  
    GET_TODO_SUCCESS, 
    POST_TODO_SUCCESS, 
    TODO_FAILURE, 
    TODO_REQUEST} from "./actionTypes"



// Todo

export const TodoRequestAction = ()=>{
    return {type:TODO_REQUEST};
}

export const getTodoSuccessAction = (payload)=>{
    return {type:GET_TODO_SUCCESS, payload};
}

export const TodoFailureAction = ()=>{
    return {type:TODO_FAILURE};
}

// POST Todo



export const postTodoSuccessAction = (payload)=>{
    return {type:POST_TODO_SUCCESS, payload};
}



