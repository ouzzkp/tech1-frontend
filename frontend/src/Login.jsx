import React, { useState } from 'react';
import './style.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, setRole, setToken, setUserID } from './Redux/Action';

function Login() {

    
    
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/hr/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.token;
                const userID = responseData.id;
                const userRole = responseData.role;
                console.log(responseData)
                console.log(userID)
                setNavigate(true)
                console.log(responseData.success)
                dispatch(setToken(token)); 
                dispatch(setUserID(userID));
                dispatch(setRole(userRole))
                dispatch(login());
            } else {
                console.log('Giriş başarısız!');
            }
        } catch (error) {
            console.error('İstek hatası:', error);
        }
    };


    if (navigate) {
        return <Navigate to="/" />
    }


    /*  const handleSubmit = (event) => {
         event.preventDefault()
         axios.post('http://localhost:8080/hr/api/auth/login', {email,password})
             .then(res => {
                 if (res.data.Status === 'Success') { // login başarılı
                     navigate('/')
                 } else {
                     setError(res.data.Error)
                 }
             })
             .catch(err => console.log(err))
     } */

    return (
        <div className=' d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className="bg-light p-3 rounded w-25 border ">
                <div className='text-danger'>
                    {error && error}
                </div>
                <h1 className='text-center'>
                    Welcome to
                    <br />
                    <span className="text-primary">HR system!</span>
                </h1>
                <div className="card bg-light">
                    <div className="card-body py-5 px-md-5 h6 ls-tight">
                        <form onSubmit={handleLogin}>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    placeholder='Type the email...'
                                    id="form3Example3"
                                    className="form-control"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    placeholder='Type the password...'
                                    id="form3Example4"
                                    className="form-control"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;