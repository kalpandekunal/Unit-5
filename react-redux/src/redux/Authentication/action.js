import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"


export const loginRequestAction = ()=>{
    return {type:LOGIN_REQUEST};
}

export const loginSuccesAction = (payload)=>{
    return {type:LOGIN_SUCCESS,payload};
}

export const loginFailureAction = ()=>{
    return {type:LOGIN_FAILURE};
}