import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import Login from './Login';
function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/hr/api/login', {
          headers: {
            Authorization: `Bearer ${token}` // Tokeni headers'a ekleyin
          }
        });
          console.log("token->>"+{token})
        if (response.status === 200) {
          const userData = response.data;
          setUser(userData);
        }
      } catch (error) {
        console.error('Profil bilgisi alınamadı:', error);
      }
    };

    fetchUser();
  }, []); 

  return (
    <div>
      <h1>Profile</h1>
    <main className="centered">
      <div className="container">
        <h4>Name: {user}</h4>
        <h4>Surname: Otto</h4>
        <h4>Job Title: $XXX</h4>
        <h4>Department: Admin</h4>
        <h4>Reigon: Admin</h4>
        <h4>Salary: Admin</h4>
      </div>
    </main>
  </div>
);
}

export default Profile