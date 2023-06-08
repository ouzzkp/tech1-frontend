
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // API'den verileri alma
    axios.get('http://localhost:8080/hr/api/employees/getall')
      .then(response => {
        // API'den dönen verileri 'data' içinden alıp state'i güncelleme
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      {employees.map(employee => (
        <div key={employee.id}>
          <h2>{employee.firstName} {employee.lastName}</h2>
          <p>Email: {employee.emailAddress}</p>
          <p>Job Title: {employee.jobTitle}</p>
          <p>Salary: {employee.salary}</p>
          <p>Mobile Phone: +{employee.mobilePhone}</p>
          <p>Address: {employee.address}</p>
          <p>Birth Date: {employee.birthDate}</p>
          <p>Hire Date: {employee.hireDate}</p>
          <p>Region: {employee.region.name}</p>
          <p>Manager: {employee.manager.firstName} {employee.manager.lastName}</p>
          <p>Department: {employee.department.name}</p>
        </div>
      ))}
       <Link to='/create'><button className="btn btn-warning">Add Employee</button></Link>

    </div>
  );
};

export default Employee;

           
     
   