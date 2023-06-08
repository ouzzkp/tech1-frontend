import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setEmployeess, setSelectedEmployeeId } from './Redux/Action';

const ManageEmployee = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);
  const [ selectedEmployee, setSelectedEmployee ] = useState()
  const navigate = useNavigate();
  


  useEffect(() => {
    // API'den verileri alma
    axios.get('http://localhost:8080/hr/api/employees/getall')
      .then(response => {
        // API'den dönen verileri state'e güncelleme
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, [dispatch]);

  const handleEditEmployee = (employeeID) => {
    const selectedEmployee = employees.find(employee => employee.id === employeeID);
    console.log("Selected Employee: "+ JSON.stringify(selectedEmployee))
    setSelectedEmployee(selectedEmployee);
    const transferedEmployee = JSON.stringify(selectedEmployee);
    console.log("Seçilmiş kullanıcı id: "+ employeeID)
    dispatch(setSelectedEmployeeId(employeeID));
    navigate(`/update-employee/`);
  };

  return (
    <MDBTable striped align='middle'>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Manager</th>
                    <th scope='col'>Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{employee.firstName} {employee.lastName}</p>
                                    <p className='text-muted mb-0'>{employee.emailAddress}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Designer</p>
                            <p className='text-muted mb-0'>{employee.department.name}</p>
                        </td>
                        <td>
                            <MDBBadge color='success' pill>
                                Active
                            </MDBBadge>
                        </td>
                        <td>{employee.manager.firstName} {employee.manager.lastName}</td>
                        <td>

                        <button className='btn btn-primary' onClick={() => handleEditEmployee(employee.id)}>Edit</button>
                            <button className="btn btn-danger" type="submit">Delete</button>
                        </td>
                    </tr>
                ))}
            </MDBTableBody>

        </MDBTable>
  );
};
export default ManageEmployee;
