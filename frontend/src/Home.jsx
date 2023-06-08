import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setEmployeess } from './Redux/Action';

function Home() {

    const dispatch = useDispatch()

    const [employees, setEmployees] = useState([]);
    const [managers, setManagers] = useState([]);
    const [totalSalary, setTotalSalary] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/hr/api/employees/getall')
            .then(response => {
                setEmployees(response.data.data);

                setManagers(response.data.data);
                console.log(response.data.data)
                dispatch(setEmployeess(response.data.data));
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    useEffect(() => {
        const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
        setTotalSalary(total);
    }, [employees]);




    return (
        <div>
            <div className='p-3 d-flex justify-content-around mt-3'>
                <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Admin</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: {managers.length}
                        </h5>
                    </div>
                </div>
                <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Employee</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: {employees.length}
                        </h5>
                    </div>
                </div><div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Salary</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: {totalSalary + "$"}
                        </h5>
                    </div>
                </div>
            </div>

            {/*List of admid*/}
            <div className='mt-4 pt-3 px-5'>
                <h3>List of Managers</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={employee.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{employee.manager.firstName}</td>
                                <td>{employee.manager.lastName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>


    )
}

export default Home