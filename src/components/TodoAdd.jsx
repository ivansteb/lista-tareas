import React from "react";

export const TodoAdd = () => {

    const onFormSubmit = e => {
        e.preventDefault()
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                className="input-add" 
                name="description" 
                value="Aprender python" 
                placeholder="¿Qué hay que hacer?" 
            />
            <button className="btn-add" type="submit">
                Agregar
            </button>
        </form>
    );
};