
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from './Redux/Action';
import { useNavigate } from 'react-router-dom';

function UpdateEmployee() {
    const selectedEmployeesID = useSelector(state => state.selectedEmployeeId);
  const navigate = useNavigate()
    const dispatch = useDispatch();
  const employees = useSelector(state => state.employee);
 

    const [updatedData, setUpdatedData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        jobTitle: '',
        salary: '',
        mobilePhone: '',
        address: '',
        birthDate: '',
        hireDate: '',
        manager: {
            firstName: '',
            lastName: ''
        }
    });
    useEffect(() => {
        if (selectedEmployeesID) {
            const selectedEmployee = employees.find(employee => employee.id === selectedEmployeesID);
            if (selectedEmployee) {
                setUpdatedData({
                    firstName: selectedEmployee.firstName,
                    lastName: selectedEmployee.lastName,
                    emailAddress: selectedEmployee.emailAddress,
                    jobTitle: selectedEmployee.jobTitle,
                    salary: selectedEmployee.salary,
                    mobilePhone: selectedEmployee.mobilePhone,
                    address: selectedEmployee.address,
                    birthDate: selectedEmployee.birthDate,
                    hireDate: selectedEmployee.hireDate,
                    manager: {
                        firstName: selectedEmployee.manager.firstName,
                        lastName: selectedEmployee.manager.lastName
                    }
                });
            }
        }
    }, [selectedEmployeesID, employees]);
    const handleInputChange = (e) => {
        if (e.target.name.startsWith('manager')) {
            setUpdatedData({
                ...updatedData,
                manager: {
                    ...updatedData.manager,
                    [e.target.name]: e.target.value
                }
            });
        } else {
            setUpdatedData({
                ...updatedData,
                [e.target.name]: e.target.value
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(selectedEmployeesID, updatedData));
        navigate('/manageEmployee');
      };
    
    return (
        <div className="d-felx flex-column align-items-center ps-5 pt-5">
            <h2 className="text-center">Sample Form</h2>
            <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="control-label col-sm-4">Employee Name</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="firstName" value={updatedData.firstName} onChange={handleInputChange} />
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-4">Employee Surname</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="lastName" value={updatedData.lastName} onChange={handleInputChange} />

                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="control-label col-sm-4">Employee Email</label>
                        <div className="col-sm-8">
                            <input type="email" className='form-control' name="emailAddress" value={updatedData.emailAddress} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-4">Employee Mobile</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="mobilePhone" value={updatedData.mobilePhone} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="control-label col-sm-2">Employee Address</label>
                        <div className="col-sm-10">
                            <input type="text" className='form-control' name="address" value={updatedData.address} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>


                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Employee Salary</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="mobilePhone" value={updatedData.mobilePhone} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Employee Job Title</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="mobilePhone" value={updatedData.mobilePhone} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <h3>Manager</h3>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Manamger Firstname</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="manager.firstName" value={updatedData.manager.firstName} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Manager Surname</label>
                        <div className="col-sm-8">
                            <input type="text" className='form-control' name="manager.lastName" value={updatedData.manager.lastName} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary waves-effect waves-light " type="submit" id="btn-submit">Save</button>
                </div>
                <input type="hidden" name="action" id="action" value="event_dialog_add_newpartnerdata" />
            </form>
        </div>
    )
}

export default UpdateEmployee
