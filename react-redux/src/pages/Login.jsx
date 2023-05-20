import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginFailureAction, loginRequestAction, loginSuccesAction } from "../redux/Authentication/action";


export const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = ()=>{
        const userInfo = {
            email,
            password,
        };

        dispatch(loginRequestAction());
        axios.post("https://reqres.in/api/login",userInfo)
        .then((res)=>{
            console.log(res.data.token);
            dispatch(loginSuccesAction(res.data.token));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(loginFailureAction());
        })

        setEmail("");
        setPassword('');

    }

    return <div>
        <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
    </div>
}