import React from 'react';
import TodoForm from './Components/TodoForm.js';
import { HomeToDo, Title } from './styles/ToDo.js'

function ToDoList(){
  return(
    <HomeToDo>
      <Title> To do List</Title>
      <TodoForm />
    </HomeToDo>
    
  );
};

export default ToDoList;
