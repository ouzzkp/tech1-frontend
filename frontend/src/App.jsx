
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import Profile from './Profile'
import Employee from './Employee'
import { BrowserRouter, Routes, Route, Router, useNavigate, Navigate } from 'react-router-dom'
import AddEmployee from './AddEmployee'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from './Redux/Action';
import ManageEmployee from './ManageEmployee'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}>
          <Route path="" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manageemployee" element={<ManageEmployee />} />
          <Route path="/create" element={<AddEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;