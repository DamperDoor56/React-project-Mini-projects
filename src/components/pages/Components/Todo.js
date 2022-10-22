import React,{ useState } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, updatedTodos}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => { 
        updatedTodos(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm onSubmit={submitUpdate} edit={edit}  />;
    }

  return todos.map((todo, index) =>
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
    <div className='icons'>
            <RiCloseCircleLine 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon' />
            <TiEdit 
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon'
            />
        </div>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        
    </div>
  )
}

export default Todo;