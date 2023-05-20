import { Counter } from "../components/Counter"
import { Todo } from "../components/Todo"
import {Routes,Route} from "react-router-dom";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { PrivateRoute } from "../components/PrivateRoute";

export const MainRoutes = ()=>{


    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="/todos" element={
                <PrivateRoute>
                    <Todo />
                </PrivateRoute>
            }/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<h1>404 Page Not found</h1>}/>
        </Routes>
    )
}