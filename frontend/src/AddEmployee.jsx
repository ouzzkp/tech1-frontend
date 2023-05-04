import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddEmployee() {
    const [data, setData] = useState({
        email: '',
        password: '',
        address: '',
        image: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="d-felx flex-column align-items-center ps-5 pt-5">
            <h3>Add Employee</h3>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className='form-label'>Email</label>
                    <input type='email' className='form-control' id='inputEmail4' placeholder='Enter Email'
                        autoComplete='off'
                        onChange={e => setData({ ...data, email: e.target.value })} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className='form-label'>Password</label>
                    <input type='password' className='form-control' id='inputPassword4' placeholder='Enter Password'
                        autoComplete='off'
                        onChange={e => setData({ ...data, password: e.target.value })} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAdress4" className='form-label'>Address</label>
                    <input type='text' className='form-control' id='inputAddress' placeholder='Enter Address'
                        autoComplete='off'
                        onChange={e => setData({ ...data, address: e.target.value })} />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                    <input type='file' className='form-control' id='inputGroupFile01'
                        onChange={e => setData({ ...data, image: e.target.files[0] })} />
                </div>
                <div className="col-12">
                    <Link to='/create'><button className="btn btn-primary">Create</button></Link>
                </div>


            </form>
        </div>
    )
}

export default AddEmployee