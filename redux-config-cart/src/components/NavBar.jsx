import { Link } from "react-router-dom"


export const NavBar = ()=>{

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/cart"}>Cart</Link>
        </div>
    )
}