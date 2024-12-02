import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { updateUser } from '../apiCalls/user.js';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            age
        };
        const response = await updateUser(data);
        if(response.status === 200) {
            alert('Profile modifié');
            setUser(response.data.user);
            navigate('/user/profile');
        } else {
            alert(response.response.data.message);
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Modifier le profil</h1>
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
            <button type="submit" className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>Modifier</button>
        </form>
    </div>
  )
}

export default UpdateProfile