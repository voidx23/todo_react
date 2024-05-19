import React, { useState } from 'react'
import style from './form.module.css'


function Form({ todos, setTodos }) {


    // const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({name:"", done:false})

    function handleSubmit(e) {
        e.preventDefault();

        setTodos([...todos, todo])
        setTodo({name:"", done:false})
    }
    return (
        <>
            <form className={style.todoform} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <input className={style.modernInput} placeholder='Enter todo item' onChange={(e) => setTodo({name:e.target.value,done:false})} type="text" value={todo.name} />
                    <button className={style.modernButton} type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default Form