import { Counter } from "../components/Counter"
import { Todo } from "../components/Todo"

export const HomePage = ()=>{

    return (
        <div>
        <h1>HomePage</h1>
        <Counter />
        <br/>
        <Todo />
        </div>
    )
}