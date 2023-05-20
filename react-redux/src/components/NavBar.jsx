import { Link } from "react-router-dom"


export const NavBar = ()=>{

    return (
        <div>
            <Link to={"/"}>Home Page</Link>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/counter"}>Counter</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}