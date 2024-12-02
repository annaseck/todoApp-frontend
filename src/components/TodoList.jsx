import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'
import TodoItems from './TodoItems.jsx'
import { getTodos } from '../apiCalls/todo.js';

const TodoList = () => {

    const { todo, setTodo } = useContext(TodoContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTodos();
            if(response.status === 200) {
                setTodo(response.data.todos);
            } else {
                alert(response.response.data.message);
            }
        }
        fetchData();
    })

  return (
    <table className='w-full table-auto'>
        <thead>
            <tr>
                <th className='border px-4 py-2'>Titre</th>
                <th className='border px-4 py-2'>Description</th>
                <th className='border px-4 py-2'>Complete</th>
                <th className='border px-4 py-2'>Voir</th>
                <th className='border px-4 py-2'>Modifier</th>
                <th className='border px-4 py-2'>Supprimer</th>
                </tr>          
        </thead>
        <tbody>
            {
                todo.length > 0 && todo.map(item => {
                    return <TodoItems key={item._id} item={item}/>
                })
            }
        </tbody>
    </table>
  )
}

export default TodoList