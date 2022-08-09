import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input;
        });
    };

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Add some value'
            value={input}
            name="text"
            className='todo-input'
            /> 
            <button className='todo-button'>
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm;