import React from 'react'
import TodoList from '../components/TodoList.jsx'

const LoggedInHome = () => {
  return (
    <div className='w-5/6 m-auto text-center'>
        <h1 className='text-3xl my-4 font-bold text-center'>Liste des tâches</h1>
        <TodoList/>
    </div>
  )
}

export default LoggedInHome