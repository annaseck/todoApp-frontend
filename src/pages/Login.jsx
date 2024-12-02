import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiCalls/user.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        const response = await login(data);
        if(response.status === 201) {
            alert('Connexion réussie');
            setUser(response.data.user);
            navigate('/');
        } else {
            alert(response.response.data.message);
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Login</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <input type="email" 
                placeholder="Votre address mail..." 
                className='focus:outline-none border-none p-2 rounded w-full'
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type="password" 
                placeholder="Votre mot de passe..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </div>            
            <button type="submit" className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>Login</button>
        </form>
    </div>
  )
}

export default Login