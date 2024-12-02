import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../apiCalls/todo.js';

const CreateTodo = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description
    };
    const response = await createTodo(data);
    if(response.status === 201) {
      alert('Tache ajoutée avec succès');
      navigate('/');
    } else {
      alert(response.response.data.message);
    }
  };

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Ajouter une tâches</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <input type="text" 
                placeholder="Titre..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={title}
                onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <textarea 
                cols={30}
                rows={5}
                placeholder="Description..." 
                className='focus:outline-none border-none p-2 rounded w-full'
                value={description}
                onChange={e => setDescription(e.target.value)}/>
            </div>
            <button type="submit" 
            className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>
              Ajouter</button>
        </form>
    </div>
  )
}

export default CreateTodo