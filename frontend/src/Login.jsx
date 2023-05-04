import React, { useState } from 'react';
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [values, setValues] = useState({
        email: 'admin@gmail.com', // set initial state
        password: 'admin'
    })

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8081/login',values)
            .then(res => {
                if (res.data.Status === 'Success'){ // login başarılı
                    navigate('/')
                } else {
                    setError(res.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control"
                                    onChange={e => setValues({ ...values, email: e.target.value })}
                                />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" id="form3Example4" className="form-control"
                                    onChange={e => setValues({ ...values, password: e.target.value })}
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