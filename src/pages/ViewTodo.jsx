import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getTodo } from '../apiCalls/todo.js';

const ViewTodo = () => {

    const [todo, setTodo] = useState({});

    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTodo(id);
            if(response.status === 200) {
                setTodo(response.data.todo);
            } else {
                alert(response.response.data.message);
            }
        }
        fetchData();
    })

  return (
    <div>
        {todo && <div>
            <h1 className='text-3xl mt-4 font-bold text-center'>Titre: {todo.title}</h1>
            <h2 className='mt-3 text-2xl'>{todo.completed ? 'completé' : 'Non completé'}</h2>
            <p className='mt-3 text-lg'>Description: {todo.description}</p>
            <p className='mt-3 text-lg'>Créé le: {new Date(todo.createdAt).toLocaleString()}</p>
            <p className='mt-3 text-lg'>Mis à jour le: {new Date(todo.updatedAt).toLocaleString()}</p>
            </div>}
    </div>
  )
}

export default ViewTodo