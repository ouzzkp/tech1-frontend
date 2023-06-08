import React, { Component, useState } from 'react'

function AddEmployee() {

  const [employeeName, setEmployeeName] = useState('');
  const [employeeSurname, setEmployeeSurname] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeMobile, setEmployeeMobile] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState('');
  const [employeeJobTitle, setEmployeeJobTitle] = useState('');
  const [managerFirstname, setManagerFirstname] = useState('');
  const [managerSurname, setManagerSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      name: employeeName,
      surname: employeeSurname,
      email: employeeEmail,
      mobile: employeeMobile,
      address: employeeAddress,
      salary: employeeSalary,
      jobTitle: employeeJobTitle,
      manager: {
        firstname: managerFirstname,
        surname: managerSurname
      }
    };

    axios.post('/api/employees/add', employeeData)
      .then(response => {
        console.log('Employee added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <div className="d-felx flex-column align-items-center ps-5 pt-5">
      <h3 className="text-center">Employee's Information</h3>
      <form className="container form-horizontal">
        <div className="col-sm-6">
          <div className="form-group">
            <label className="control-label col-sm-4">Employee Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
            </div>
          </div>


          <div className="form-group">
            <label className="control-label col-sm-4">Employee Surname</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeSurname} onChange={(e) => setEmployeeSurname(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label className="control-label col-sm-4">Employee Email</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-4">Employee Mobile</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeMobile} onChange={(e) => setEmployeeMobile(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <label className="control-label col-sm-2">Employee Address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={employeeAddress} onChange={(e) => setEmployeeAddress(e.target.value)} />
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Employee Salary</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeSalary} onChange={(e) => setEmployeeSalary(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Employee Job Title</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={employeeJobTitle} onChange={(e) => setEmployeeJobTitle(e.target.value)} />
            </div>
          </div>
        </div>
        <h3 className='text-center'>Manager</h3>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Manamger Firstname</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={managerFirstname} onChange={(e) => setManagerFirstname(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Manager Surname</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" value={managerSurname} onChange={(e) => setManagerSurname(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary waves-effect waves-light " type="submit" id="btn-submit">Create</button>
        </div>
        <input type="hidden" name="action" id="action" value="event_dialog_add_newpartnerdata" />
      </form>
    </div>



  )
}

export default AddEmployee
