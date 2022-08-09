import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inpuRef = useRef(null);

    useEffect(() =>{
        inpuRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
    };

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
              <> <input 
            type='text'
            placeholder='Update your item'
            value={input}
            name="text"
            className='todo-input'
            onChange={handleChange}
            ref={inpuRef}
            /> 
            <button className='todo-button edit'>
            Update
            </button></>)
            
             : ( <><input 
            type='text'
            placeholder='Add some value'
            value={input}
            name="text"
            className='todo-input'
            onChange={handleChange}
            ref={inpuRef}
            /> 
            <button className='todo-button'>
                Add
            </button>
            </>)}
           
        </form>
    </div>
  )
}

export default TodoForm;