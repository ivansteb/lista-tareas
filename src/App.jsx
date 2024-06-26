import { useState } from 'react'
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo';

function App() {

  const {         
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo 
  } = useTodo();

  return (
    <>
      <div className='cart-to-do'>
        <h1>Listas de tareas</h1>
        <div className='counter-todos'>
          <h3>N° de tareas: <span>{todosCount}</span></h3>
          <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
        </div>
      

        <div className='add-todo'>
          <h3>Agregar tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList 
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
};

export default App;
