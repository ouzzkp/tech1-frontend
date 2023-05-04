
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import Profile from './Profile'
import Employee from './Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEmployee from './AddEmployee'

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path='/create' element={<AddEmployee />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
