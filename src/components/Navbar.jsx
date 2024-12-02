import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='border-b-2 bg-gray-400'>
        <div className='w-11/12 mx-auto py-4  flex justify-between'>
        <h1 className='text-xl font-bold'>Todo App</h1>
        <ul className='flex'>
            {user._id && <>
                <li className='ml-5 text-lg hover:text-white hover:underline'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='ml-5 text-lg hover:text-white hover:underline'>
                    <Link to="/todo/create">Ajouter</Link>
                </li>
                <li className='ml-5 text-lg hover:text-white hover:underline'>
                    <Link to="/user/profile">Profile</Link>
                </li>
            </>}
            {!user._id && <>
                <li className='ml-5 text-lg hover:text-white hover:underline'>
                    <Link to="/user/register">Register</Link>
                </li>
                <li className='ml-5 text-lg hover:text-white hover:underline'>
                    <Link to="/user/login">Login</Link>
                </li>
            </>}
            
        </ul>
        </div>
    </div>
    
  )
}

export default Navbar