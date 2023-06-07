import React, { Component, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from './Redux/Action';

const Dashboard = ({ userRole }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        // localStorage.removeItem('persist:root');

        dispatch(logout());

    };
    const dashboardTitle = userRole === '"ADMIN"' ? 'Admin Dashboard' : 'Employee Dashboard';

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                            <span className="fs-5 d-none d-sm-inline">{dashboardTitle}</span>


                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                            <li>
                                <Link to='/' data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>

                            </li>
                            {userRole === '"ADMIN"' ? (
                                <li>
                                    <Link to="manageemployee" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Employees</span>
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link to="home" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Co-Workers</span>
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link to='profile' data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>

                            </li>
                        </ul>
                        <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <Link to="login" className="nav-link px-0" onClick={handleLogout}>
                                    <i className="fs-4 bi-power "></i> <span className="ms-1 d-none d-sm-inline">Logout</span> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col p-0 m-0 py-3  align-items-center">

                    <div className='p-2 d-flex justify-content-center shadow'>
                        <h3>Tech-1 Employee Managemet System</h3>
                    </div>
                    <Outlet />
                </div>

            </div>

        </div>

    )
}


export default Dashboard