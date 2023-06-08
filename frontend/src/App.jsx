
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import Profile from './Profile'
import { BrowserRouter, Routes, Route, Router, useNavigate, Navigate } from 'react-router-dom'
import AddEmployee from './CoEmployee'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './Redux/Action';
import ManageEmployee from './ManageEmployee'
import UpdateEmployee from './UpdateEmployee'
import CoEmployee from './CoEmployee'
import CreateEmployee from './AddEmployee'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   const role = useSelector(state => state.role.role);
  const userRole = JSON.stringify(role)
  const dispatch = useDispatch();
  useEffect(() => {
    const handlePopState = () => {
      if (isLoggedIn && window.location.pathname === '/login') {

        localStorage.removeItem('persist:root');
        dispatch(logout());
        window.location.href = '/login';
      }
    };

    const handleNavigate = () => {
      if (!isLoggedIn && window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigate', handleNavigate);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handleNavigate);
    };
  }, [isLoggedIn, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Dashboard  userRole={userRole}  /> : <Navigate to="/login" />}>
          <Route path="" element={<Home />} />
          {userRole === '"USER"' && ( 
                <Route path="/co-employee" element={<CoEmployee />} />
         )}
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
         {userRole === '"ADMIN"' && ( 
            <Route path="/manageemployee" element={<ManageEmployee />} />
         )}
         {userRole === '"ADMIN"' && ( 
            <Route path="/updateemployee" element={<UpdateEmployee />} />
         )}
         {userRole === '"ADMIN"' && ( 
          <Route path="/add-employee" element={<AddEmployee />} />
         )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;