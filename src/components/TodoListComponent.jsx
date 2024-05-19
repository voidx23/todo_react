import React from 'react'
import TodoItem from "./TodoItem";
import style from './todoList.module.css'

function TodoListComponent({ todos, setTodos }) {

    const sortedArray = todos.slice().sort((a, b) => Number(a.done) - Number(b.done))
    return (
        <div className={style.list}>
            {
              sortedArray.map((item) => (

                    <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
                ))}
        </div>
    )
}

export default TodoListComponent