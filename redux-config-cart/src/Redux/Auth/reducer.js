
const initialState = {
    auth: false,
    token: "",
    isLoading:false,
    isError:false,
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        default:
            return state;
    }
}