import React, { useState } from 'react';
import Todo from './Components/Todo.js';
import TodoForm from './Components/TodoForm.js';

import './styles/Todo.css'

function ToDoList(){
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos);
  };

  const updatedTodos = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
      );
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  };


  const completeTodo = id =>{
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodos(updatedTodos);
  }
  return(
    <div className='Home'>

      <div className='former-app'>
      <div className='title'> What's your plan?</div>
      <TodoForm className='form' onSubmit={addTodo}/>
      <Todo  
      completeTodo={completeTodo} 
      todos={todos} removeTodo={removeTodo} updatedTodos={updatedTodos}
     />
     </div>
    </div>
  );
};

export default ToDoList;