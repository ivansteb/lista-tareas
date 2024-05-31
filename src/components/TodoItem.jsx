import React from "react";
import { GoTrash } from 'react-icons/go';
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({ 
    todo, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    handleCompleteTodo 
 }) => {
    return (
        <li>
            <span onClick={() => handleCompleteTodo(todo.id)}>
                <label htmlFor="" className="container-done"></label>
            </span>
            <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
                <GoTrash />
            </button>
        </li>
    )
}