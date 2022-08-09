import React, { useState } from 'react';
import Todo from './Components/Todo.js';
import TodoForm from './Components/TodoForm.js';
import { HomeToDo, Title} from './styles/ToDo';

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
    <HomeToDo>
      <Title> What's your plan for today?</Title>
      <TodoForm onSubmit={addTodo}/>
      <Todo  
      completeTodo={completeTodo} 
      todos={todos} removeTodo={removeTodo} updatedTodos={updatedTodos}
     />
    </HomeToDo>
    
  );
};

export default ToDoList;