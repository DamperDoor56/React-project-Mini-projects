import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const[todos, setTodos] = useState([]);
  return (
    <div>
        <h1>What's your plan for today?</h1>
        <TodoList />
    </div>
  )
}

export default TodoList;