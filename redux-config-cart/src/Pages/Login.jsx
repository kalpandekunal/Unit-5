import { useState } from "react"
import axios from "axios";
import {useDispatch} from "react-redux";
import { loginFailureAction, loginRequestAction, loginSuccessAction } from "../Redux/Auth/action";

export const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = ()=>{
        const userInfo = {
            email,
            password,
        }

        dispatch(loginRequestAction());
        axios.post("https://reqres.in/api/login",userInfo)
        .then((res)=>{
            dispatch(loginSuccessAction(res.data.token));
        })
        .catch((err)=>{
            dispatch(loginFailureAction());
        })

        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <input
             type="text" 
             placeholder="Email" 
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
             type="password" 
             placeholder="Password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)} 
             />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}