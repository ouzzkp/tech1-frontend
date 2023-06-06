import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css'
function Profile() {

  const token = useSelector((state)=> state.token);
  const userID = useSelector((state) => state.userID);

  console.log(token)

  /* const [user, setUser] = useState(null);
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
  }, []);  */

  
    return (
      <div className="profile-wrapper">
          <div className="profile-page">
              <div className="profile-image-section">
                  <img className="profile-image" src="data:image/jpeg;base64,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" alt="asd" />
              </div>
              <div className="profile-info-section">
                  <h1 className="profile-name">asd</h1>
                  <h2 className="profile-email">asd</h2>
                  <h3 className="profile-department">ad</h3>
                  <p className="profile-bio">asd</p>
              </div>
          </div>
      </div>
  );

}

export default Profile