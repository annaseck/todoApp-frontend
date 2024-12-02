import React from 'react';
import { useState, useContext } from 'react';
import { register } from '../apiCalls/user.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        const data = {
            name,
            email,
            age,
            password
        }
        const response = await register(data);
        
        if(response && response.status === 201) {
            alert('Inscription réussie');
            setUser(response.data.user);
            navigate('/');
        } else {
            alert(response?.response?.data?.message || 'Une erreur est survenue');
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Register</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <input type="text" 
                placeholder="Votre nom..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type="email" 
                placeholder="Votre address mail..." 
                className='focus:outline-none border-none p-2 rounded w-full'
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type="number" 
                placeholder="Votre age..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={age}
                onChange={e => setAge(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type="password" 
                placeholder="Votre mot de passe..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </div>            
            <div className='mb-3'>
                <input type="password" 
                placeholder="Confirmez le mot de passe..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <button type="submit" 
            className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>
                Register</button>
        </form>
    </div>
  )
}

export default Register