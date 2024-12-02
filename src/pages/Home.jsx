import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className='w-1/4 h-2/3 bg-white mt-14 rounded m-auto text-center flex flex-col justify-center'>
        <h1 className='text-3xl my-3 font-bold'>Bienvenue sur Todo App</h1>
        <p className='text-lg'>Gérez vos tâches quotidiennes avec notre application</p>
        <button className='w-1/2 py-2 my-8 mx-auto rounded bg-green-400 hover:bg-green-600'>
          <Link to='/user/register'>S'inscrire</Link>
        </button> <br/>  
        <p className='text-lg'>Déjà inscrit?</p>   
        <Link className='text-green-600 underline' to='/user/login'>Se connecter</Link>
      </div>   
  )
}

export default Home