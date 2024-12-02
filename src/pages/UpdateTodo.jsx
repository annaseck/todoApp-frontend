import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'
import { useNavigate, useParams } from 'react-router-dom';
import { updateTodo } from '../apiCalls/todo.js';

const UpdateTodo = () => {

    const {todo, setTodo} = useContext(TodoContext);
    const {id} = useParams();
    const mytodo = todo.find((todo) => todo._id === id);
    const [title, setTitle] = useState(mytodo.title);
    const [description, setDescription] = useState(mytodo.description);
    const [completed, setCompleted] = useState(mytodo.completed);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            completed
        };
        const response = await updateTodo(id, data);
        if(response.status === 200) {
            alert('Tache modifiée avec succès');
            navigate('/');
        } else {
            alert(response.response.data.error);
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Mettre a jour</h1>
        <form onSubmit={handleSubmit}>
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
            <div className='mb-3'>
                <select
                className='focus:outline-none border-none p-2 rounded w-full'
                value={completed}
                onChange={e => setCompleted(e.target.value)}
                >
                    <option value="true">Completé</option>
                    <option value="false">Non completé</option>
                </select>
            </div>
            <button type="submit" className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>Modifier</button>
        </form>
    </div>
  )
}

export default UpdateTodo