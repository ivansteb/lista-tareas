import React from "react";
import { GoTrash } from 'react-icons/go';
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = () => {
    return (
        <li>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <TodoUpdate />
            <button className="btn-delete"><GoTrash /></button>
        </li>
    )
}