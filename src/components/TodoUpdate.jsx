import React from "react";
import { GrEdit } from "react-icons/gr";
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {

    const { updateDescription, onInputChange } = useForm({
        updateDescription: todo.description,
    });

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = todo.id
        const description = updateDescription

        handleUpdateTodo(id, description)

    };


    return (
        <form onSubmit={onSubmitUpdate}>
            <input 
                type="text" 
                className="input-update" 
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder="¿Qué hay que hacer?" 
            />
            <button className="btn-edit" type="submit">
                <GrEdit />
            </button>
        </form>
    );
};