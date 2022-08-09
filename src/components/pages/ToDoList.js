import React from 'react';
import TodoForm from './Components/TodoForm.js';
import { HomeToDo, Title } from './styles/ToDo.js'

function ToDoList(){
  return(
    <HomeToDo>
      <Title> What's your plan for today?</Title>
      <TodoForm />
    </HomeToDo>
    
  );
};

export default ToDoList;
