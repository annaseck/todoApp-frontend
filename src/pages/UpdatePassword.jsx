import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../apiCalls/user';

const UpdatePassword = () => {

    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        const data = {
            password: oldPassword,
            newPassword: password,
        }
        const response = await updatePassword(data);
        if(response.status === 200) {
            alert('Mot de passe modifié');
            navigate('/user/profile');
        } else {
            alert(response.response.data.message);
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-3 font-bold'>Modifier mot de pass</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <input type="password" 
                placeholder="Ancien mot de pass..." 
                className='focus:outline-none border-none p-2 rounded w-full' 
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type="password" 
                placeholder="Nouvelle mot de passe..." 
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
            <button type="submit" className='w-1/2 py-2 rounded bg-green-400 hover:bg-green-600'>Modifier</button>
        </form>
    </div>
  )
}

export default UpdatePassword