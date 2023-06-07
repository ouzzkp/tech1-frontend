
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import Profile from './Profile'
import Employee from './Employee'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import AddEmployee from './AddEmployee'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path='/create' element={<AddEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;