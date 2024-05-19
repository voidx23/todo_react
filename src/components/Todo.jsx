import { useState } from "react"
import Form from "./Form";
import TodoListComponent from "./TodoListComponent";
import Footer from "./Footer";

export default function Todo() {

    const [todos, setTodos] = useState([]);

    const completedTodos = todos.filter((todo)=> todo.done).length
    const totalTodos = todos.length
    return (
        <>

            <Form todos={todos} setTodos={setTodos} />
            <TodoListComponent todos={todos} setTodos={setTodos} />
            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>

        </>
    )
}