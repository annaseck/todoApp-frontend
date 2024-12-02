import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx';
import { logout, deleteUser } from '../apiCalls/user.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutHandler = async () => {
        const response = await logout();
        if(response.status === 200) {
            alert('Utilisateur deconnecté avec succès');
            setUser({});
            navigate('/user/login');
        } else {
            alert(response.response.data.message);
        }
    }

    const deleteAccountHandler = async () => {
        if(window.confirm('Etes vous sur de voiloir supprimer le compte?')) {
            const response = await deleteUser();
            if(response.status === 200) {
                alert('Utilisateur supprimé avec succès');
                setUser({});
                navigate('/user/login');
            } else {
                alert(response.response.data.message);
            }
        }
    }

  return (
    <div className='w-1/4 m-auto text-center'>
        <h1 className='text-3xl my-4 font-bold'>Profile</h1>
        <div className='mt-3'>
            <h2>Nom: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Age: {user.age}</h2>
        </div>
        <div className='mt-3'>
            <button onClick={() => navigate('/user/update')} className='my-2 w-full py-2 rounded bg-blue-400 hover:bg-blue-600'>
                Modifier le profile
            </button>
            <button onClick={() => navigate('/user/updatepassword')} className='my-2 w-full py-2 rounded bg-green-400 hover:bg-green-600'>
                Modifier le mot de passe
            </button>
            <button onClick={logoutHandler} className='my-2 w-full py-2 rounded bg-orange-400 hover:bg-orange-600'>
                Deconnecter
            </button>
            <button onClick={deleteAccountHandler} className='my-2 w-full py-2 rounded bg-red-400 hover:bg-red-600'>
                Supprimer le profile
            </button>
        </div>
    </div>
  )
}

export default Profile