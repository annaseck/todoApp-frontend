import { Routes, Route } from 'react-router-dom';
//import './App.css';
import Navbar from './components/Navbar.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext.jsx';
import { getUser } from './apiCalls/user.js';
import LoggedInHome from './pages/LoggedInHome.jsx';
import UnProtectedRoutes from './components/UnProtectedRoutes.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import CreateTodo from './pages/CreateTodo.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import UpdatePassword from './pages/UpdatePassword.jsx';
import ViewTodo from './pages/ViewTodo.jsx';
import UpdateTodo from './pages/UpdateTodo.jsx';

function App() {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();       
        if (response && response.data) {
          setUser(response.data.user);
        } else {
          console.error('Response does not contain data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  });

  return (
    <div className="App bg-gradient-to-r from-gray-300 to-green-200">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user._id ? <LoggedInHome /> : <Home />} />
        <Route path="/user/register" element={
          <UnProtectedRoutes loggedIn={user._id ? true : false}>
            <Register />
          </UnProtectedRoutes>} />
        <Route path="/user/login" element={
          <UnProtectedRoutes loggedIn={user._id ? true : false}>
            <Login />
          </UnProtectedRoutes>
        } />
        <Route path="/user/profile" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <Profile />
          </ProtectedRoutes>
        } />
        <Route path="/todo/create" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <CreateTodo />
          </ProtectedRoutes>
        } />
        <Route path="/user/update" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <UpdateProfile />
          </ProtectedRoutes>
        } />
        <Route path="/user/updatepassword" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <UpdatePassword />
          </ProtectedRoutes>
        } />
        <Route path="/todo/view/:id" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <ViewTodo />
          </ProtectedRoutes>
        } />
        <Route path="/todo/update/:id" element={
          <ProtectedRoutes loggedIn={user._id ? true : false}>
            <UpdateTodo />
          </ProtectedRoutes>
        } />
      </Routes>
    </div>
  );
}

export default App;
