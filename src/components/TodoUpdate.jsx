import React from "react";
import { GrEdit } from "react-icons/gr";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    return (
        <form>
            <input 
                type="text" 
                className="input-update" 
                name="description" 
                value={todo.description}
                placeholder="¿Qué hay que hacer?" 
            />
            <button className="btn-edit" type="submit">
                <GrEdit />
            </button>
        </form>
    )
}