import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    auth:false,
    token:"",
    isLoading:false,
    isError:false,
};

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state,isLoading: true}
        case LOGIN_SUCCESS:
            return {...state,isLoading: false, auth: true, token: payload}
        case LOGIN_FAILURE:
            return {...state,isLoading: false, isError: true}
        default :
            return state;
    }
}